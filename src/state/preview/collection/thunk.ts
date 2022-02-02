import {AppDispatch} from "../../store";
import {CollectionId} from "../../../business-logic/models/types";
import {collectionAPI} from "../../../business-logic/near/api/collections";
import {previewCollectionSlice} from "./slice";
import {mapMjolTokenToNFT} from "../../../business-logic/models/nft";

export const fetchCollection = (collectionId: CollectionId) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewCollectionSlice.actions.toggleFetching(true))
        collectionAPI.fetchCollectionInfo(collectionId)
            .then(collection => dispatch(previewCollectionSlice.actions.setCollection(collection)))
            .finally(() => dispatch(previewCollectionSlice.actions.toggleFetching(false)))
    }

export const fetchCollectionNfts = (collectionId: CollectionId, from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewCollectionSlice.actions.toggleNftsFetching(true))
        collectionAPI.fetchNfts(collectionId, from, limit)
            .then(response => Promise.all(response.tokens.map(mapMjolTokenToNFT))
                .then(nfts =>
                    dispatch(previewCollectionSlice.actions.setNftsBatch({
                        tokens: nfts,
                        hasMore: response.has_next_batch,
                        total: response.total_count
                    }))
                )
            ).finally(() => dispatch(previewCollectionSlice.actions.toggleNftsFetching(false)))
    }