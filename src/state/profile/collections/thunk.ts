import {AppDispatch} from "../../store";
import {profileCollectionsSlice} from "./slice";
import {collectionAPI} from "../../../business-logic/near/api/collections";

export const fetchMyCollections = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileCollectionsSlice.actions.toggleFetching(true))
        collectionAPI.fetchUserCollections(accountId)
            .then(collections => dispatch(profileCollectionsSlice.actions.setCollections(collections)))
            .finally(() => dispatch(profileCollectionsSlice.actions.toggleFetching(false)))
    }