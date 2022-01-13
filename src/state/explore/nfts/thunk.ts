import {AppDispatch} from "../../store";
import {exploreNftsSlice} from "./slice";
import {getMarketNfts} from "../../../business-logic/near/api/market/get-nfts-market";

export const fetchMarketNfts = (from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreNftsSlice.actions.toggleFetching(true))
        getMarketNfts(from, limit)
            .then(nfts => dispatch(exploreNftsSlice.actions.setNfts(nfts)))
            .finally(() => dispatch(exploreNftsSlice.actions.toggleFetching(false)))
    }