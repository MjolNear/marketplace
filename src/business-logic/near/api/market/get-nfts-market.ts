import {getConvertedNFT} from "../standardization";
import {viewFunction} from "../rpc";
import {marketAPI, MarketToken} from "./api";
import {buildUID, formatOptionalPrice} from "../utils";
import {batchRequest} from "../batch-request";
import {Nft} from "../../../models/nft";


export async function getMarketNfts(from = 0, limit = 50) {
    const marketNfts = await marketAPI.fetchTokens(from, limit);
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
    }).then(result => result.values)
}

