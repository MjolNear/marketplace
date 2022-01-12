import {mjolViewFunction} from "../rpc";
import {AccountId, ContractId, NumberAmount, TokenId, TokenUID} from "../types";

export type UserListings = Array<[TokenUID, NumberAmount]>

export interface MarketToken {
    approval_id: number,
    nft_contract_id: ContractId,
    owner_id: AccountId,
    price: number,
    token_id: TokenId
}

export interface MarketData {
    tokens: MarketToken[],
    has_next_batch: boolean,
    total_count: number
}

export interface PayableToken {
    tokenUID: string,
    price: number | null
}

const emptyMarketData: MarketData = {
    tokens: [],
    has_next_batch: false,
    total_count: 0
}


export const marketAPI = {
    /**
     * Fetches NFTs listed on market.<br>
     * If an error occurred returns empty array.
     *
     * @param from  start index for fetching
     * @param limit maximum amount of fetched tokens
     */
    fetchTokens: (from: number, limit: number) =>
        mjolViewFunction<MarketData>({
                methodName: 'get_nfts',
                args: {
                    from,
                    limit
                }
            }
        ).catch(e => {
            console.log("Get transaction NFTs error", e);
            return emptyMarketData
        }),

    /**
     * Fetches currently listed nft prices
     *
     * @param accountId NEAR account
     */
    fetchUserListings: (accountId: AccountId) =>
        mjolViewFunction<MarketToken[]>({
            methodName: 'get_user_nfts',
            args: {
                owner_id: accountId
            }
        }),

    /**
     * Retrieves NFT price if listed on market, otherwise returns null
     *
     * @param contractId
     * @param tokenId
     */
    fetchNftPrice: async (contractId: ContractId, tokenId: TokenId): Promise<PayableToken> => {
        const tokenUID = `${contractId}:${tokenId}`
        const price = await mjolViewFunction<number | null>({
            methodName: 'get_nft_price',
            args: {
                token_uid: tokenUID
            }
        })
        return {tokenUID, price}
    }
}