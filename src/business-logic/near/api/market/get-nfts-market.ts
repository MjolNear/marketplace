import {getConvertedNFT} from "../standardization";
import {viewFunction} from "../rpc";
import {marketAPI} from "./api";
import {buildUID, formatOptionalPrice} from "../utils";
import {batchRequest} from "../batch-request";
import {Nft} from "../../../models/nft";
import {MarketToken} from "../types/response/market";

export interface MarketPage {
    tokens: Nft[],
    hasMore: boolean,
    total: number
}


export async function getMarketNfts(from = 0, limit = 50): Promise<MarketPage> {
    const marketNfts = await marketAPI.fetchTokens(from, limit)
    return batchRequest<MarketToken, Nft>(marketNfts.tokens, async token => {
        const {price, token_id, nft_contract_id: contractId} = token
        return viewFunction({
                contractId,
                methodName: 'nft_token',
                args: {token_id}
            }
        ).then(response => {
                const uid = buildUID(contractId, token_id)
                const tokenPrice = {[uid]: formatOptionalPrice(price)}
                return getConvertedNFT(contractId, response, tokenPrice)
            }
        )
    }).then(result => ({
        tokens: result.values,
        hasMore: marketNfts.has_next_batch,
        total: marketNfts.total_count
    }))
}

