interface NearPriceResponse {
    near: {
        usd: number
    }
}

export const fetchNearUsdPrice = async (): Promise<string> => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=NEAR&vs_currencies=USD"
    const result: NearPriceResponse = await fetch(url).then(response => response.json())

    return result.near.usd.toString()
}