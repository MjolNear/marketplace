import {AppDispatch} from "../../store";
import {marketNftTransactionSlice} from "./slice";
import {buyNftWithPayouts, giveApprove, unlistNFT} from "../../../business-logic/near/api/market/transaction";
import {Nft} from "../../../business-logic/models/nft";

export const sellNft = (contractId: string, tokenId: string, price: string, nft: Nft) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        giveApprove(contractId, tokenId, price, nft)
            .then(() => dispatch(marketNftTransactionSlice.actions.success()))
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }

export const buyNft = (contractId: string, tokenId: string, price: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        buyNftWithPayouts(contractId, tokenId, price)
            .then(() => dispatch(marketNftTransactionSlice.actions.success()))
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }


export const unlistNft = (contractId: string, tokenId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        unlistNFT(contractId, tokenId)
            .then(() => dispatch(marketNftTransactionSlice.actions.success()))
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }
