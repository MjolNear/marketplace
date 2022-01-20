import {AccountId, TokenId} from "../../../../models/types";

/**
 * NFT core standard
 *
 * {@link https://github.com/near/NEPs/blob/master/specs/Standards/NonFungibleToken/Core.md}
 */
export interface CoreToken {
    token_id: TokenId
    owner_id: AccountId
}