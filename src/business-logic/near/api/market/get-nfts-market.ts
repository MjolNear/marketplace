import {getConvertedNFT} from "../standardization";
import {viewFunction} from "../rpc";
import {marketAPI} from "./api";
import {buildUID, formatOptionalPrice} from "../utils";


export async function getMarketNfts(from = 0, limit = 50) {
    const marketNfts = await marketAPI.fetchTokens(from, limit);
    let resNFTs = [];

    for (let marketNft of marketNfts.tokens) {

        const {price, token_id, nft_contract_id: contractId} = marketNft


        const nftPromise = viewFunction({
            contractId,
            methodName: 'nft_token',
            args: {token_id}
        }).then(response => getConvertedNFT(
            contractId,
            response,
            {
                [buildUID(contractId, token_id)]: formatOptionalPrice(price)
            }
        ))

        resNFTs.push(nftPromise)
    }

    return resNFTs
}

