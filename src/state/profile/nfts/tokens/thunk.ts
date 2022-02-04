import {getUserNfts} from "../../../../business-logic/near/api/nfts/get-user-nfts";

import {AppDispatch} from "../../../store";
import {profileTokensSlice} from "./slice";

export const fetchMyNfts = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileTokensSlice.actions.toggleFetching(true))
        getUserNfts('root.near')
            .then((nfts) => {
                dispatch(profileTokensSlice.actions.setNfts(nfts))
            })
            .finally(() => dispatch(profileTokensSlice.actions.toggleFetching(false)))
    }