import {AppDispatch} from "../../store";
import {CollectionId} from "../../../business-logic/models/types";
import {collectionAPI} from "../../../business-logic/near/api/collections";
import {previewCollectionSlice} from "./slice";
import {mapTokenToNFT} from "../../../business-logic/near/api/standardization/nft-converter";
import {MJOL_CONTRACT_ID} from "../../../business-logic/near/enviroment/contract-names";

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
            .then(response => Promise.all(response.tokens.map(token => mapTokenToNFT(MJOL_CONTRACT_ID, token)))
                .then(nfts =>
                    dispatch(previewCollectionSlice.actions.setNftsBatch({
                        tokens: nfts,
                        hasMore: response.has_next_batch,
                        total: response.total_count
                    }))
                )
            ).finally(() => dispatch(previewCollectionSlice.actions.toggleNftsFetching(false)))
    }