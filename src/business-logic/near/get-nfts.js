import {convertStandardNFT, getJsonByURL, getMintbaseNFT} from "./nft-converter";
import {mockGetPricesByKeys} from '../api/mocks'

const nearApi = require("near-api-js");

class NftAPI {
    constructor(limit = 20) {
        this.limit = limit;
    }

    static async buildAccountInfo(accountId) {
        const network = accountId.endsWith('.near')
            ? 'mainnet'
            : 'testnet';

        const accountURL = `https://helper.${network}.near.org/account/${accountId}/likelyNFTs`;
        let nftContracts = await getJsonByURL(accountURL);
        const provider = new nearApi.providers.JsonRpcProvider(`https://rpc.${network}.near.org`);
        const account = new nearApi.Account({provider: provider});
        return {account, nftContracts}
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


export async function getNfts(accountId) {
    const accountInfo = await NftAPI.buildAccountInfo(accountId)
    const account = accountInfo.account
    const nftContracts = accountInfo.nftContracts

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
