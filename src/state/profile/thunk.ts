import {getUserNfts} from "../../business-logic/near/api/nfts/get-user-nfts";

import {AppDispatch} from "../store";
import {profileSlice} from "./slice";

export const fetchMyNfts = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileSlice.actions.toggleFetching(true))
        getUserNfts(accountId)
            .then(nfts => dispatch(profileSlice.actions.setNfts(nfts)))
            .finally(() => dispatch(profileSlice.actions.toggleFetching(false)))
    }