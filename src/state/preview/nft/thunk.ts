import {AppDispatch} from "../../store";
import {previewNftSlice} from "./slice";
import {getNftPayouts} from "../../../near/api/nfts/get-user-nfts";
import {contractAPI} from "../../../near/api/contracts";
import {nftAPI} from "../../../near/api/nfts";

export const fetchNft = (contractId: string, tokenId: string) =>
    async (dispatch: AppDispatch) => {

        dispatch(previewNftSlice.actions.toggleFetching(true))

        nftAPI.fetchStandardizedNft(contractId, tokenId)
            .then(nft => {
                dispatch(previewNftSlice.actions.success(nft))
            })
            .catch(() => dispatch(previewNftSlice.actions.failure()))
            .finally(() => dispatch(previewNftSlice.actions.toggleFetching(false)))

        // marketAPI.fetchTokenPrice(contractId, tokenId)
        //     .then(price => dispatch(previewNftSlice.actions.setPrice(price)))

        getNftPayouts(contractId, tokenId)
            .then(p => dispatch(previewNftSlice.actions.setPayouts(p)))

        contractAPI.fetchContract(contractId)
            .then(contract => dispatch(previewNftSlice.actions.setContract(contract)))
    }