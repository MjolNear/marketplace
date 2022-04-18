import {formatNearAmount, parseNearAmount} from "near-api-js/lib/utils/format";
import {AccountId, Optional} from "../business-logic/types/aliases";

export const shortenString = (string: string, chunkSize = 5, sizeToSplit = 15) => {
    if (string.length > sizeToSplit) {
        return string.slice(0, chunkSize) + '..' + string.slice(-chunkSize)
    }
    return string
}

export const prettyAccount = (accountId: AccountId, prefixChunk = 12, sizeToSplit = 25) => {
    if (accountId.length <= sizeToSplit) {
        return accountId
    }
    if (accountId.endsWith(".near")) {
        return accountId.slice(0, prefixChunk) + ".." + accountId.slice(-7, -5) + ".near"
    } else {
        return shortenString(accountId, 8, sizeToSplit)
    }
}

export const fromYocto2Near = (yocto?: Optional<string>, fracDigits?: number) => {
    const nearAmount = formatNearAmount(yocto || '', fracDigits || 6)
    if (!nearAmount || !yocto) {
        return "---"
    }
    return nearAmount
}

export const getPercentage = (
    value: number,
    percentage: number,
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
    value: number,
    percentage: number,
    minValue = 0,
    maxValue = MAX_ITEM_NEAR_PRICE,
    defaultValue = 0,
    maximumFractionDigits = 6
) => {
    return getPercentage(value, percentage, minValue, maxValue, defaultValue)
        .toLocaleString(
            'en-US',
            {maximumFractionDigits}
        )
}

export const prettyBalance = (balance: number, decimals = 18, len = 8) => {
    console.log(balance)
    if (!balance) {
        return '0'
    }
    const diff = balance.toString().length - decimals
    const fixedPoint = Math.max(2, len - Math.max(diff, 0))
    const fixedBalance = (balance / 10 ** decimals).toFixed(fixedPoint)
    const finalBalance = parseFloat(fixedBalance).toString()
    const [head, tail] = finalBalance.split('.')
    if (head === '0') {
        if (tail) {
            return `${head}.${tail.substring(0, len - 1)}`
        }
        return `${head}`
    }
    const formattedHead = head.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return tail ? `${formattedHead}.${tail}` : formattedHead
}

export const MIN_ITEM_NEAR_PRICE = 0
export const MAX_ITEM_NEAR_PRICE = 10_000_000

export const MIN_ITEM_YOCTO_PRICE = "0"
export const MAX_ITEM_YOCTO_PRICE = parseNearAmount(MAX_ITEM_NEAR_PRICE.toString()) || "0"