import {AccountId, TokenId} from "../../../../@types/Aliases";

/**
 * NFT core standard
 *
 * Provides token_id and owner_id fields.
 *
 * {@link https://github.com/near/NEPs/blob/master/specs/Standards/NonFungibleToken/Core.md}
 */
export interface NearCoreToken {
    token_id: TokenId
    owner_id: AccountId
}