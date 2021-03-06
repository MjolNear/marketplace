import {AppDispatch} from "../../store";
import {CollectionId, ContractId} from "../../../@types/Aliases";
import {collectionAPI} from "../../../near/api/collections";
import {collectionTokensSlice} from "./slice";
import {mapTokenToNFT} from "../../../near/api/nfts/nft-converter";

export const fetchCollectionNfts = (
    collectionId: CollectionId,
    contractId: ContractId,
    from: number,
    limit: number,
    supply?: number
) => async (dispatch: AppDispatch) => {
    dispatch(collectionTokensSlice.actions.toggleFetching(true))
    collectionAPI.fetchNfts(collectionId, contractId, from, limit, supply)
        .then(response =>
            Promise.all(
                response.tokens.map(token => mapTokenToNFT(contractId, token))
            ).then(tokens => {
                    dispatch(collectionTokensSlice.actions.setNftsBatch({
                        tokens,
                        hasMore: response.has_next_batch,
                        total: response.total_count
                    }))
                }
            )
        ).finally(() => dispatch(collectionTokensSlice.actions.toggleFetching(false)))
}