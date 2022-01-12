import {utils} from 'near-api-js'
import {getConvertedNFT} from "../nfts/nft-converter";
import {viewFunction} from "../rpc";
import {ContractId, TokenId} from "../types";
import {marketAPI} from "./api";

function formatPrice(x: number) {
    const price = x.toLocaleString('fullwide', {useGrouping: false});
    return utils.format.formatNearAmount(price)
}

export async function getNftPriceByTokenUID(contractId: ContractId, tokenId: TokenId) {
    return marketAPI.fetchNftPrice(contractId, tokenId)
        .then(payableToken => (
            {
                [payableToken.tokenUID]: payableToken.price ? formatPrice(payableToken.price) : null
            }
        )).catch(e => {
            console.log(`getNftPriceByTokenUID error: ${e}`)
            return {}
        })
}

export async function getNftPricesByUser(accountId: string) {
    const map = new Map<string, string>()
    return marketAPI.fetchUserListings(accountId)
        .then(listings => {
                listings.forEach(nft => map.set(`${nft.nft_contract_id}:${nft.token_id}`, formatPrice(nft.price)))
                return Object.fromEntries(map)
            }
        ).catch(e => {
            console.log("Get user NFT prices error", e);
            return {}
        })
}


// export const fetchMarketNfts = (from: number, limit: number) => {
//     getMarketNftsPrices(from, limit)
//         .then(marketTokens =>
//             console.log('x')
//         )
// }

export async function getMarketNfts(from = 0, limit = 50) {
    const marketNfts = await marketAPI.fetchTokens(from, limit);
    let resNFTs = [];

    for (let marketNft of marketNfts.tokens) {

        const contractId = marketNft.nft_contract_id
        const tokenId = marketNft.token_id
        const price = marketNft.price

        const nftPromise = viewFunction({
            contractId,
            methodName: 'nft_token',
            args: {
                token_id: tokenId
            }
        }).then(response => getConvertedNFT(
            contractId,
            response,
            {
                [`${contractId}:${tokenId}`]: formatPrice(price)
            }
        ))

        resNFTs.push(nftPromise)
    }

    return resNFTs
}

