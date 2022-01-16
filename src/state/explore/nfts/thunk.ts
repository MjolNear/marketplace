import {AppDispatch} from "../../store";
import {exploreNftsSlice} from "./slice";
import {getMarketNfts} from "../../../business-logic/near/api/market/get-nfts-market";

export const fetchMarketNfts = (from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreNftsSlice.actions.toggleFetching(true))
        getMarketNfts(from, limit)
            .then(data => dispatch(exploreNftsSlice.actions.setPageData(data)))
            .finally(() => dispatch(exploreNftsSlice.actions.toggleFetching(false)))
    }