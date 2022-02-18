import {AppDispatch} from "../../store";
import {CollectionId, ContractId} from "../../../business-logic/models/types";
import {collectionAPI} from "../../../business-logic/near/api/collections";
import {previewCollectionSlice} from "./slice";
import {mapTokenToNFT} from "../../../business-logic/near/api/standardization/nft-converter";

export const fetchCollection = (collectionId: CollectionId, contractId: ContractId) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewCollectionSlice.actions.toggleFetching(true))
        Promise.all([
                collectionAPI.fetchCollectionInfo(collectionId),
                collectionAPI.fetchTotalSupply(collectionId, contractId)
            ]
        ).then(([collection, supply]) => {
                dispatch(previewCollectionSlice.actions.setCollection(collection))
                dispatch(previewCollectionSlice.actions.setTotalSupply(supply))
            }
        ).finally(() => dispatch(previewCollectionSlice.actions.toggleFetching(false)))
    }

export const fetchCollectionNfts = (
    collectionId: CollectionId,
    contractId: ContractId,
    from: number,
    limit: number,
    supply?: number
) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewCollectionSlice.actions.toggleNftsFetching(true))
        collectionAPI.fetchNfts(collectionId, contractId, from, limit, supply)
            .then(response => Promise.all(response.tokens.map(token => mapTokenToNFT(contractId, token)))
                .then(nfts => {
                        dispatch(previewCollectionSlice.actions.setNftsBatch({
                            tokens: nfts,
                            hasMore: response.has_next_batch,
                            total: response.total_count
                        }))
                    }
                )
            ).finally(() => dispatch(previewCollectionSlice.actions.toggleNftsFetching(false)))
    }