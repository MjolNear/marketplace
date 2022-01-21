import {
    AccountId,
    ContractId,
    NumberAmount,
    Optional,
    StringAmount,
    TokenId,
    TokenUID
} from "../../../../models/types";
import {TokensResponse} from "./core";

export interface MarketToken {
    approval_id: number,
    nft_contract_id: ContractId,
    owner_id: AccountId,
    price: NumberAmount,
    token_id: TokenId
}

export type MarketTokens = TokensResponse<MarketToken>
export type TokenPrices = Record<TokenUID, Optional<StringAmount>>