import {getUserNfts} from "../../../../business-logic/near/api/nfts/get-user-nfts";

import {AppDispatch} from "../../../store";
import {profileTokensSlice} from "./slice";

export const fetchMyNfts = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileTokensSlice.actions.toggleFetching(true))
        getUserNfts(accountId)
            .then(([nfts, contracts]) => {
                dispatch(profileTokensSlice.actions.setNfts(nfts))
                dispatch(profileTokensSlice.actions.setContracts(contracts))
            })
            .finally(() => dispatch(profileTokensSlice.actions.toggleFetching(false)))
    }