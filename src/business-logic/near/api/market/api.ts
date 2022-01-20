import {mjolViewFunction} from "../rpc";
import {AccountId, ContractId, NumberAmount, Optional, TokenId} from "../../../models/types";
import {buildUID, formatOptionalPrice, formatPrice} from "../utils";
import {MarketData, MarketToken, TokenPrices} from "../types/response/market";


export const marketAPI = {
    /**
     * Fetches NFTs listed on market.<br>
     * If an error occurred returns empty array.
     *
     * @param from  start index for fetching
     * @param limit maximum amount of fetched tokens
     */
    fetchTokens: (from: number, limit: number): Promise<MarketData> =>
        mjolViewFunction<MarketData>({
                methodName: 'get_nfts',
                args: {
                    from,
                    limit
                }
            }
        ).catch(() => ({
            tokens: [],
            has_next_batch: false,
            total_count: 0
        })),

    /**
     * Fetches market NFTs prices for given user
     *
     * @param accountId NEAR account
     */
    fetchUserTokenPrices: (accountId: AccountId): Promise<TokenPrices> => {
        const prices: TokenPrices = {}
        return mjolViewFunction<MarketToken[]>({
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
        ).catch(() => prices)
    },

    /**
     * Retrieves NFT price if NFT listed on market, otherwise returns null
     */
    fetchTokenPrice: (contractId: ContractId, tokenId: TokenId): Promise<TokenPrices> => {
        const tokenUID = buildUID(contractId, tokenId)
        return mjolViewFunction<Optional<NumberAmount>>({
                methodName: 'get_nft_price',
                args: {
                    token_uid: tokenUID
                }
            }
        ).then(price => ({
            [tokenUID]: formatOptionalPrice(price)
        }))
    }
}