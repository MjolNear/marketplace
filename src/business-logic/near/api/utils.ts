import {ContractId, NumberAmount, Optional, StringAmount, TokenId, TokenUID} from "../../types/aliases";
import {utils} from "near-api-js";
import {ResponseTokenPrices} from "./types/response/market";

export const formatOptionalPrice = (price: Optional<NumberAmount>): Optional<StringAmount> => {
    return price === null
        ? null
        : formatPrice(price)
}

export const getPrice = (uid: TokenUID, tokenPrices: ResponseTokenPrices): Optional<StringAmount> => {
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