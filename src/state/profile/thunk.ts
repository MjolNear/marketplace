import {getNfts} from "../../business-logic/near/get-nfts";

import {AppDispatch} from "../store";
import {profileSlice} from "./slice";

export const fetchMyNfts = (accountId: string) => async (dispatch: AppDispatch) => {
    dispatch(profileSlice.actions.toggleFetching(true))
    getNfts(accountId)
        .then(promises => promises
            .forEach(promise =>
                promise.then(nft => dispatch(profileSlice.actions.addNft(nft)))
            )
        )
        .finally(() => dispatch(profileSlice.actions.toggleFetching(false)))
}