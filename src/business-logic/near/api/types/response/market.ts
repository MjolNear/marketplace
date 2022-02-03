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
import {CoreToken} from "../token";

export interface MarketToken extends CoreToken {
    approval_id: number,
    nft_contract_id: ContractId,
    price: NumberAmount,
}

export type MarketTokens = TokensResponse<MarketToken>
export type TokenPrices = Record<TokenUID, Optional<StringAmount>>