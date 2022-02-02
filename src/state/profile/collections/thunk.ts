import {AppDispatch} from "../../store";
import {profileCollectionsSlice} from "./slice";
import {collectionAPI} from "../../../business-logic/near/api/collections";

export const fetchMyCollections = (accountId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(profileCollectionsSlice.actions.toggleFetching(true))
        collectionAPI.fetchUserCollections('turk.near')
            .then(collections => dispatch(profileCollectionsSlice.actions.setCollections(
                collections
                    .concat(collections)
                    .concat(collections)
                    .concat(collections)
            )))
            .finally(() => dispatch(profileCollectionsSlice.actions.toggleFetching(false)))
    }