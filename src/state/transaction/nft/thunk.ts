import {AppDispatch} from "../../store";
import {marketNftTransactionSlice} from "./slice";
import {buyNftWithPayouts, giveApprove} from "../../../business-logic/near2/near/api/market/transaction";

export const sellNft = (contractId: string, tokenId: string, price: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        giveApprove(contractId, tokenId, price)
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

