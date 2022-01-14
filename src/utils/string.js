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
    maxValue = MAX_ITEM_PRICE,
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
    maxValue = MAX_ITEM_PRICE,
    defaultValue = 0,
    maximumFractionDigits = 4
) => {
    return getPercentage(value, percentage, minValue, maxValue, defaultValue)
        .toLocaleString(
            'en-US',
            {maximumFractionDigits}
        )
}

export const MAX_ITEM_PRICE = 10_000_000