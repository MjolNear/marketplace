import {convertStandardNFT, getJsonByURL, getMintbaseNFT} from "./nft-converter";
import {mockGetPricesByKeys} from '../api/mocks'

const nearApi = require("near-api-js");

// TODO:- Rewrite logic of getting nft with readable errors for UI.
class NftAPI {

    static getNetwork(accountId) {
        return accountId.endsWith('.near')
            ? 'mainnet'
            : 'testnet';
    }

    static buildAccountInfo(accountId) {
        const network = NftAPI.getNetwork(accountId)
        const provider = new nearApi.providers.JsonRpcProvider(`https://rpc.${network}.near.org`);
        return new nearApi.Account(
            {provider: provider}
        )
    }

    static async buildContractInfo(accountId) {
        const network = NftAPI.getNetwork(accountId)
        const accountURL = `https://helper.${network}.near.org/account/${accountId}/likelyNFTs`;
        return await getJsonByURL(accountURL)
    }
}

async function getNFTsByContractAndAccount(account, contractId, accountId) {
    const limit = 20;
    let allNfts = [], curNfts = [];
    do {
        try {
            curNfts = await account.viewFunction(contractId, 'nft_tokens_for_owner', {
                account_id: accountId,
                from_index: allNfts.length.toString(),
                limit: limit
            });
        } catch (e) {
            console.log(e);
            break
        }
        allNfts = allNfts.concat(curNfts);
    } while (curNfts.length >= limit);

    return allNfts;
}

async function getNftInfo(account, contractId, nft, listedNftKeys) {
    if (contractId.endsWith('mintbase1.near')) {
        return getMintbaseNFT(account, contractId, nft, listedNftKeys)
    }
    return convertStandardNFT(contractId, nft, listedNftKeys)
}

export async function getNFTsByContractAndTokenId(accountId, contractId, tokenId) {
    const account = NftAPI.buildAccountInfo(accountId)
    const nft = await account.viewFunction(contractId, 'nft_token', {
        token_id: tokenId
    });
    const listedNftKeys = mockGetPricesByKeys(account);
    return getNftInfo(account, contractId, nft, listedNftKeys)
}

export async function getNftPayouts(accountId, contractId, tokenId) {
    const account = NftAPI.buildAccountInfo(accountId)
    const TREASURY_PERCENT = 2;
    try {
        return account.viewFunction(contractId, 'nft_payout', {
            token_id: tokenId,
            balance: '10000',
            max_len_payout: 10
        }).then(payouts => {
            let royalties = {'treasury': TREASURY_PERCENT};
            let highestPayout = null;
            for (let payoutKey in payouts['payout']) {
                const payoutVal = parseInt(payouts['payout'][payoutKey]) / 100;
                if (!highestPayout || highestPayout[1] < payoutVal) {
                    highestPayout = [payoutKey, payoutVal]
                }
                royalties[payoutKey] = payoutVal
            }
            delete royalties[highestPayout[0]]

            return royalties
        })
    } catch (e) {
        console.log(e);
    }
    return null
}

export async function getNfts(accountId) {
    const account = NftAPI.buildAccountInfo(accountId)
    const nftContracts = await NftAPI.buildContractInfo(accountId)

    nftContracts.push('mjol.near');

    if (nftContracts.error) {
        console.log("Account error found");
        return []
    }
    const listedNftKeys = mockGetPricesByKeys(account);
    let resNFTs = [];
    for (let contractId of nftContracts) {
        const nfts = await getNFTsByContractAndAccount(account, contractId, accountId);
        for (let nft of nfts) {
            const nftInfoPromise = getNftInfo(account, contractId, nft, listedNftKeys)
            resNFTs.push(nftInfoPromise)
        }
    }

    return resNFTs
}
