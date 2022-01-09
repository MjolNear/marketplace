import {utils} from 'near-api-js'
import {getConvertedNFT} from "./nft-converter";
import {NftAPI} from "./get-utils";
import {mjolViewFunction, viewFunction} from "../near2/near/api/rpc";
import {PayableToken} from "../near2/near/api/types";


function formatPrice(x: number) {
    const price = x.toLocaleString('fullwide', {useGrouping: false});
    return utils.format.formatNearAmount(price)
}

export async function getNftPriceByTokenUID(contractId: string, tokenId: string) {
    const nft_uid = contractId + ":" + tokenId;
    const response = mjolViewFunction({
        methodName: 'get_nft_price',
        args: {nft_uid}
    })
    return response
        .then((price: number) => {
                if (price === 0) {
                    return {}
                }
                return {[nft_uid]: formatPrice(price)}
            }
        ).catch(e => {
            console.log(`getNftPriceByTokenUID: ${e}`)
            return {}
        })
}

export async function getNftPricesByUser(accountId: string) {
    const map = new Map<string, string>()
    return mjolViewFunction({
        methodName: 'get_user_nfts',
        args: {
            owner_id: accountId
        }
    }).then((vec: Array<[string, number]>) => {
            vec.forEach(([tokenUID, price]) => map.set(tokenUID, formatPrice(price)))
            return Object.fromEntries(map)
        }
    ).catch(e => {
        console.log("Get user NFT prices error", e);
        return {}
    })
}

async function getMarketNftsPrices(account: any, from: number, limit: number) {
    return mjolViewFunction({
            methodName: 'get_nfts',
            args: {
                from,
                limit
            }
        }
    ).then(x => x
    ).catch((e) => {
        console.log("Get transaction NFTs error", e);
        return []
    })
}

export async function getMarketNfts(accountId: number, from = 0, limit = 10) {
    const account = NftAPI.buildAccountInfo(accountId)
    const marketNfts = await getMarketNftsPrices(account, from, limit);
    let resNFTs = [];
    for (let marketNft of marketNfts) {

        const contractId = marketNft.nft_contract_id
        const tokenId = marketNft.token_id
        const price = marketNft.price

        const response = await viewFunction({
            contractId,
            methodName: 'nft_token',
            args: {
                token_id: tokenId
            }
        })

        const nftPromise = getConvertedNFT(
            account,
            contractId,
            response,
            {
                [contractId + ":" + tokenId]: formatPrice(price)
            }
        )
        resNFTs.push(nftPromise)
    }
    return resNFTs
}

