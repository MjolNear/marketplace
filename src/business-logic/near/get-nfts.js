import {getConvertedNFT} from "../near2/near/api/nfts/nft-converter";
import {getNftPriceByTokenUID, getNftPricesByUser} from "../near2/near/api/market/get-nfts-market";
import {viewFunction} from "../near2/near/api/rpc";
import {fetchNftContracts} from "../near2/near/api/nft-contracts";


function getNFTsByContractAndAccount(contractId, accountId) {
    const limit = 20, from = 0
    return viewFunction({
        contractId,
        methodName: 'nft_tokens_for_owner',
        args: {
            account_id: accountId,
            from_index: from.toString(),
            limit: limit
        }
    }).catch(e => {
        console.log("Get user nfts error:" + e)
        return []
    })
}


export async function getNFTsByContractAndTokenId(contractId, tokenId) {
    const nft = await viewFunction({
        contractId,
        methodName: 'nft_token',
        args: {
            token_id:
            tokenId
        }
    })
    const listedNftKeys = await getNftPriceByTokenUID(contractId, tokenId);
    return getConvertedNFT(contractId, nft, listedNftKeys)
}

export async function getNftPayouts(contractId, tokenId) {
    const TREASURY_PERCENT = 2;
    try {
        return viewFunction({
            contractId,
            methodName: 'nft_payout',
            args: {
                token_id: tokenId,
                balance: '100000000',
                max_len_payout: 10
            }
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

    let nftContracts = await fetchNftContracts(accountId)
    nftContracts = addExtraContracts(nftContracts)

    if (nftContracts.error) {
        console.log("Account error found");
        return []
    }
    const listedNftKeys = await getNftPricesByUser(accountId);
    let resNFTs = [];
    for (let contractId of nftContracts) {
        const nfts = await getNFTsByContractAndAccount(contractId, accountId);
        for (let nft of nfts) {
            const nftInfoPromise = getConvertedNFT(contractId, nft, listedNftKeys)
            resNFTs.push(nftInfoPromise)
        }
    }

    return resNFTs
}
