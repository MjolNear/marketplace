import {AppDispatch} from "../../store";
import {exploreCollectionsSlice} from "./slice";
import {collectionAPI} from "../../../near/api/collections";

export const fetchCollections = (from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreCollectionsSlice.actions.toggleFetching(true))
        collectionAPI.fetchCollections(from, limit)
            .then(data => dispatch(exploreCollectionsSlice.actions.setPageData(data)))
            .finally(() => dispatch(exploreCollectionsSlice.actions.toggleFetching(false)))
    }