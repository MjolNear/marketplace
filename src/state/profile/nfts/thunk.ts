import {getUserNfts} from "../../../business-logic/near/api/nfts/get-user-nfts";

import {AppDispatch} from "../../store";
import {profileNftsSlice} from "./slice";

export const fetchMyNfts = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileNftsSlice.actions.toggleFetching(true))
        getUserNfts(accountId)
            .then(nfts => dispatch(profileNftsSlice.actions.setPageData(nfts)))
            .finally(() => dispatch(profileNftsSlice.actions.toggleFetching(false)))
    }