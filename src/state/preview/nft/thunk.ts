import {AppDispatch} from "../../store";
import {previewNftSlice} from "./slice";
import {
    getNFTByCID,
    getNftPayouts,
    getNFTsByContractAndTokenId
} from "../../../business-logic/near/api/nfts/get-user-nfts";
import {contractAPI} from "../../../business-logic/near/api/contracts";
import {marketAPI} from "../../../business-logic/near/api/market";

export const fetchNft = (contractId: string, tokenId: string) =>
    async (dispatch: AppDispatch) => {

        dispatch(previewNftSlice.actions.toggleFetching(true))

        getNFTByCID(contractId, tokenId)
            .then(nft => {
                dispatch(previewNftSlice.actions.success(nft))
            })
            .catch(() => dispatch(previewNftSlice.actions.failure()))
            .finally(() => dispatch(previewNftSlice.actions.toggleFetching(false)))

        marketAPI.fetchTokenPrice(contractId, tokenId)
            .then(price => dispatch(previewNftSlice.actions.setPrice(price)))

        getNftPayouts(contractId, tokenId)
            .then(p => dispatch(previewNftSlice.actions.setPayouts(p)))

        contractAPI.fetchContractBeta(contractId)
            .then(contract => dispatch(previewNftSlice.actions.setContract(contract)))
    }