import {parseNearAmount} from "near-api-js/lib/utils/format";

export const shortenString = (string, chunkSize = 5, sizeToSplit = 15) => {
    if (string.length > sizeToSplit) {
        return string.slice(0, chunkSize) + '..' + string.slice(-chunkSize)
    }
    return string
}

export const getPercentage = (
    value,
    percentage,
    minValue = 0,
    maxValue = MAX_ITEM_NEAR_PRICE,
    defaultValue = 0
) => {
    if (value < 0 || value > maxValue) {
        return defaultValue
    }
    return (percentage / 100) * value
}

export const getStringPercentage = (
    value,
    percentage,
    minValue = 0,
    maxValue = MAX_ITEM_NEAR_PRICE,
    defaultValue = 0,
    maximumFractionDigits = 4
) => {
    return getPercentage(value, percentage, minValue, maxValue, defaultValue)
        .toLocaleString(
            'en-US',
            {maximumFractionDigits}
        )
}

export const MIN_ITEM_NEAR_PRICE = 0
export const MAX_ITEM_NEAR_PRICE = 10_000_000

export const MIN_ITEM_YOCTO_PRICE = "0"
export const MAX_ITEM_YOCTO_PRICE = parseNearAmount(MAX_ITEM_NEAR_PRICE.toString()) || "0"