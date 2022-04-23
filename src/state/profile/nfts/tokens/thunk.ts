import {getUserNfts} from "../../../../near/api/nfts/get-user-nfts";

import {AppDispatch} from "../../../store";
import {profileTokensSlice} from "./slice";

export const fetchMyNfts = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileTokensSlice.actions.toggleFetching(true))
        getUserNfts(accountId)
            .then(nfts => dispatch(profileTokensSlice.actions.setNfts(nfts)))
            .finally(() => dispatch(profileTokensSlice.actions.toggleFetching(false)))
    }