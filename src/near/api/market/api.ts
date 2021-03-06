import {marketViewFunction} from "../../enviroment/rpc";
import {AccountId, ContractId, NumberPrice, Optional, StringPrice, TokenId} from "../../../@types/Aliases";
import {buildUID, formatOptionalPrice, formatPrice} from "../utils";
import {MarketResponseTokens, MarketResponseToken, ResponseTokenPrices} from "../types/response/market";


export const marketAPI = {
    /**
     * Fetches NFTs listed on market.<br>
     * If an error occurred returns empty array.
     *
     * @param from  start index for fetching
     * @param limit maximum amount of fetched tokens
     */
    fetchTokens: (from: number, limit: number): Promise<MarketResponseTokens> =>
        marketViewFunction<MarketResponseTokens>({
                methodName: 'get_nfts',
                args: {
                    from,
                    limit
                }
            }
        ).catch((e) => {
            console.log(e)
            return {
                tokens: [],
                has_next_batch: false,
                total_count: 0
            }
        }),

    /**
     * Fetches market NFTs prices for given user
     *
     * @param accountId NEAR account
     */
    fetchUserTokenPrices: (accountId: AccountId): Promise<ResponseTokenPrices> => {
        const prices: ResponseTokenPrices = {}
        return marketViewFunction<MarketResponseToken[]>({
                methodName: 'get_user_nfts',
                args: {
                    owner_id: accountId
                }
            }
        ).then(tokens => {
                tokens.forEach(nft => {
                        const uid = buildUID(nft.nft_contract_id, nft.token_id)
                        prices[uid] = formatPrice(nft.price)
                    }
                )
                return prices
            }
        ).catch((e) => {
            console.log(e)
            return prices
        })
    },

    /**
     * Retrieves NFT price if NFT listed on market, otherwise returns null
     */
    fetchTokenPrice: (contractId: ContractId, tokenId: TokenId): Promise<Optional<StringPrice>> => {
        const tokenUID = buildUID(contractId, tokenId)
        return marketViewFunction<Optional<NumberPrice>>({
                methodName: 'get_nft_price',
                args: {
                    token_uid: tokenUID
                }
            }
        ).then(price => formatOptionalPrice(price)
        ).catch(e => {
            console.log(e)
            return null
        })
    }
}