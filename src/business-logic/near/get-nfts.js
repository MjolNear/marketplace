import {getConvertedNFT} from "./nft-converter";
import {NftAPI} from "./get-utils";
import {getNftPriceByTokenUID, getNftPricesByUser} from "./get-nfts-market";
import {viewFunction} from "../near2/near/api/rpc";


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
            console.log("No more NFT for user.");
            break
        }
        allNfts = allNfts.concat(curNfts);
    } while (curNfts.length >= limit);

    return allNfts;
}


export async function getNFTsByContractAndTokenId(accountId, contractId, tokenId) {
    const account = NftAPI.buildAccountInfo(accountId)
    const nft = await viewFunction({
        contractId,
        methodName: 'nft_token',
        args: {
            token_id:
            tokenId
        }
    })
    const listedNftKeys = await getNftPriceByTokenUID(contractId, tokenId);
    return getConvertedNFT(account, contractId, nft, listedNftKeys)
}

export async function getNftPayouts(accountId, contractId, tokenId) {
    const account = NftAPI.buildAccountInfo(accountId)
    const TREASURY_PERCENT = 2;
    try {
        return account.viewFunction(contractId, 'nft_payout', {
            token_id: tokenId,
            balance: '100000000',
            max_len_payout: 10
        }).then(payouts => {
            let royalties = {'treasury': TREASURY_PERCENT};
            let highestPayout = null;
            for (let payoutKey in payouts['payout']) {
                const payoutVal = parseInt(payouts['payout'][payoutKey]) / 1000000;
                if (!highestPayout || highestPayout[1] < payoutVal) {
                    highestPayout = [payoutKey, payoutVal]
                }
                royalties[payoutKey] = payoutVal
            }
            delete royalties[highestPayout[0]]
            delete royalties['undefined']

            return royalties
        })
    } catch (e) {
        console.log(e);
    }
    return null
}

function addExtraContracts(curContracts) {
    const extraContracts = ['mjol.near'];
    for (let contract of extraContracts) {
        if (!curContracts.includes(contract)) {
            curContracts.push('mjol.near');
        }
    }
    return curContracts
}

export async function getNfts(accountId) {
    const account = NftAPI.buildAccountInfo(accountId)

    let nftContracts = await NftAPI.buildContractInfo(accountId)
    nftContracts = addExtraContracts(nftContracts)
    console.log(nftContracts)


    if (nftContracts.error) {
        console.log("Account error found");
        return []
    }
    const listedNftKeys = await getNftPricesByUser(accountId);
    let resNFTs = [];
    for (let contractId of nftContracts) {
        const nfts = await getNFTsByContractAndAccount(account, contractId, accountId);
        for (let nft of nfts) {
            const nftInfoPromise = getConvertedNFT(account, contractId, nft, listedNftKeys)
            resNFTs.push(nftInfoPromise)
        }
    }

    return resNFTs
}
