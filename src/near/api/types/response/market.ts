import {
    ContractId,
    NumberPrice,
    Optional,
    StringPrice,
    TokenUID
} from "../../../../@types/Aliases";
import {TokensBatchResponse} from "./core";
import {NearCoreToken} from "../token";

export interface MarketResponseToken extends NearCoreToken {
    approval_id: number,
    nft_contract_id: ContractId,
    price: NumberPrice,
}

export type MarketResponseTokens = TokensBatchResponse<MarketResponseToken>
export type ResponseTokenPrices = Record<TokenUID, Optional<StringPrice>>