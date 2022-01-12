import {viewFunction} from "../rpc";
import {AccountId, ContractId, StringAmount, TokenId} from "../types";

export interface Payouts {
    payout: Record<AccountId, StringAmount>
}

export const nftAPI = {
    /**
     * Fetches information about NFT.
     * Currently, supports any type of responses.
     *
     * @param contractId NEAR contract where NFT is stored.
     * @param tokenId NFT token
     */
    fetchByContractAndToken: (contractId: ContractId, tokenId: TokenId) => viewFunction(
        {
            contractId,
            methodName: 'nft_token',
            args: {
                token_id: tokenId
            }
        }),

    /**
     * Fetches standard NFT payouts.
     * @see [Standard for a Multiple-Recipient-Payout mechanic on NFT Contracts (NEP-199)]{@link https://nomicon.io/Standards/NonFungibleToken/Payout.html}
     *
     * @param contractId NEAR contract where NFT is stored.
     * @param tokenId NFT token
     */
    fetchPayouts: (contractId: ContractId, tokenId: TokenId) => viewFunction<Payouts>(
        {
            contractId,
            methodName: 'nft_payout',
            args: {
                token_id: tokenId,
                balance: '100000000',
                max_len_payout: 10
            }
        })
}