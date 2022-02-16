import {AppDispatch} from "../../store";
import {previewNftSlice} from "./slice";
import {getNftPayouts, getNFTsByContractAndTokenId} from "../../../business-logic/near/api/nfts/get-user-nfts";
import {contractAPI} from "../../../business-logic/near/api/contracts";
import {nftAPI} from "../../../business-logic/near/api/nfts";

export const fetchNft = (contractId: string, tokenId: string) =>
    async (dispatch: AppDispatch) => {

        dispatch(previewNftSlice.actions.toggleFetching(true))

        Promise.all([
                getNFTsByContractAndTokenId(contractId, tokenId)
                    .then(nft => dispatch(previewNftSlice.actions.success(nft)))
                    .catch(() => dispatch(previewNftSlice.actions.failure())),

                // nftAPI.isMjolNearApproved(contractId, tokenId)
                //     .then(isApproved => dispatch(previewNftSlice.actions.setIsApproved(isApproved))),

                contractAPI.fetchContractBeta(contractId)
                    .then(contract => dispatch(previewNftSlice.actions.setContract(contract))),

                getNftPayouts(contractId, tokenId)
                    .then(p => dispatch(previewNftSlice.actions.setPayouts(p)))
            ]
        ).finally(() => dispatch(previewNftSlice.actions.toggleFetching(false)))
    }