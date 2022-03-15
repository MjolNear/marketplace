import {useEffect, useState} from "react";

export const useNearUsdPrice = () => {

    const [usdPrice, setUsdPrice] = useState<number | null>(null)

    useEffect(() => {
        setTimeout(() => {
            const url = "https://api.coingecko.com/api/v3/simple/price?ids=NEAR&vs_currencies=USD"
            fetch(url)
                .then(response => response.json())
                .then(json => setUsdPrice(json.near.usd))
        }, 5000)
    }, [])

    return usdPrice
}