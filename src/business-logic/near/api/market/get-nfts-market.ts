import {getConvertedNFT} from "../nfts/nft-converter";
import {viewFunction} from "../rpc";
import {marketAPI} from "./api";
import {formatOptionalPrice} from "../utils";


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
                [`${contractId}:${tokenId}`]: formatOptionalPrice(price)
            }
        ))

        resNFTs.push(nftPromise)
    }

    return resNFTs
}

