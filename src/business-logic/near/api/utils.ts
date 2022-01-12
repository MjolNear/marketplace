import {ContractId, NumberAmount, Optional, TokenId, TokenUID} from "../../models/types";
import {utils} from "near-api-js";

export const formatOptionalPrice = (price: Optional<NumberAmount>): Optional<string> => {
    if (!price) {
        return null
    }
    return formatPrice(price)
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