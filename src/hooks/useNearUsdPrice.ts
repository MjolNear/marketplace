import {useEffect, useState} from "react";
import {Optional} from "../business-logic/models/types";

export const useNearUsdPrice = () => {

    const [usdPrice, setUsdPrice] = useState<Optional<number>>(null)

    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/simple/price?ids=NEAR&vs_currencies=USD"
        fetch(url)
            .then(response => response.json())
            .then(json => setUsdPrice(json.near.usd))
    }, [])

    return usdPrice
}