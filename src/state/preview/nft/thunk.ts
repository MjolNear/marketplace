import {AppDispatch} from "../../store";
import {previewNftSlice} from "./slice";
import {getNftPayouts, getNFTsByContractAndTokenId} from "../../../business-logic/near/api/nfts/get-nfts";

export const fetchNft = (contractId: string, tokenId: string) =>
    async (dispatch: AppDispatch) => {

        dispatch(previewNftSlice.actions.toggleFetching(true))

        Promise.all([
                getNFTsByContractAndTokenId(contractId, tokenId)
                    .then(nft => dispatch(previewNftSlice.actions.success(nft)))
                    .catch(() => dispatch(previewNftSlice.actions.failure()))
                    .finally(() => dispatch(previewNftSlice.actions.toggleFetching(false))),

                getNftPayouts(contractId, tokenId)
                    .then(p => dispatch(previewNftSlice.actions.setPayouts(p)))
            ]
        ).then()
        // ).finally(() => dispatch(previewNftSlice.actions.toggleFetching(false)))
    }