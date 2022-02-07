import {
    ContractId,
    NumberAmount,
    Optional,
    StringAmount,
    TokenUID
} from "../../../../models/types";
import {TokensBatchResponse} from "./core";
import {CoreToken} from "../token";

export interface MarketToken extends CoreToken {
    approval_id: number,
    nft_contract_id: ContractId,
    price: NumberAmount,
}

export type MarketTokens = TokensBatchResponse<MarketToken>
export type TokenPrices = Record<TokenUID, Optional<StringAmount>>