import {AppDispatch} from "../../store";
import {previewNftSlice} from "./slice";
import {getNftPayouts, getNFTsByContractAndTokenId} from "../../../business-logic/near/get-nfts";

export const fetchNft = (accountId?: string, contractId?: string, tokenId?: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewNftSlice.actions.startFetching())
        getNFTsByContractAndTokenId(accountId, contractId, tokenId)
            .then(nft => {
                //console.log(nft)
                dispatch(previewNftSlice.actions.success(nft))
            })
            .catch(() => {
                console.log("Nft loading error")
                dispatch(previewNftSlice.actions.failure())
            })

        getNftPayouts(accountId, contractId, tokenId)
            .then(payouts => dispatch(previewNftSlice.actions.fetchPayouts(payouts)))
            .catch(() => console.log("Payouts not found"))
    }