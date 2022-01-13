import {ContractId, NumberAmount, Optional, StringAmount, TokenId, TokenUID} from "../../models/types";
import {utils} from "near-api-js";
import {TokenPrices} from "./market/api";

export const formatOptionalPrice = (price: Optional<NumberAmount>): Optional<StringAmount> => {
    return price === null
        ? null
        : formatPrice(price)
}

export const getPrice = (uid: TokenUID, tokenPrices: TokenPrices): Optional<StringAmount> => {
    const price = tokenPrices[uid]
    return price === undefined
        ? null
        : price
}

export const formatPrice = (price: NumberAmount): string => {
    const stringPrice = price.toLocaleString('fullwide', {useGrouping: false})
    return utils.format.formatNearAmount(stringPrice)
}

/**
 * Builds UID for token as `contract:token`
 */
export const buildUID = (contractId: ContractId, tokenId: TokenId): TokenUID => {
    return `${contractId}:${tokenId}`
}