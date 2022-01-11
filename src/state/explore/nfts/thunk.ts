import {AppDispatch} from "../../store";
import {exploreNftsSlice} from "./slice";
import {getMarketNfts} from "../../../business-logic/near2/near/api/market/get-nfts-market";

export const fetchMarketNfts = (from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreNftsSlice.actions.toggleFetching(true))
        getMarketNfts(from, limit)
            .then(promises =>
                promises.forEach(promise =>
                    promise.then(nft => dispatch(exploreNftsSlice.actions.addNft(nft)))
                )
            )
            .catch(e => console.log(e))
            .finally(() => dispatch(exploreNftsSlice.actions.toggleFetching(false)))
    }