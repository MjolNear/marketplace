import {
    ContractId,
    NumberAmount,
    Optional,
    StringAmount,
    TokenUID
} from "../../../../types/aliases";
import {TokensBatchResponse} from "./core";
import {NearCoreToken} from "../token";

export interface MarketResponseToken extends NearCoreToken {
    approval_id: number,
    nft_contract_id: ContractId,
    price: NumberAmount,
}

export type MarketResponseTokens = TokensBatchResponse<MarketResponseToken>
export type ResponseTokenPrices = Record<TokenUID, Optional<StringAmount>>