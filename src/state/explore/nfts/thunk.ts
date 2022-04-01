import {AppDispatch} from "../../store";
import {exploreNftsSlice} from "./slice";

// import {getMarketTokens} from "../../../business-logic/thegraph/queries/tokens/get-market-tokens";
import {getMarketNfts} from "../../../near/api/market/get-nfts-market";

export const fetchMarketNfts = (from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreNftsSlice.actions.toggleFetching(true))
        // getMarketTokens(from, limit)
        //     .then(data => dispatch(exploreNftsSlice.actions.setPageData(data)))
        //     .finally(() => dispatch(exploreNftsSlice.actions.toggleFetching(false)))
    }