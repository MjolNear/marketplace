import {buyNftWithPayouts, giveApprove} from "../../../business-logic/near/contract";

export const SET_NFT_TRANSACTION_PENDING = "SET_NFT_TRANSACTION_PENDING"
export const SET_NFT_TRANSACTION_SUCCESS = "SET_NFT_TRANSACTION_SUCCESS"


const setNftTransactionPending = (pending) => ({
    type: SET_NFT_TRANSACTION_PENDING,
    payload: pending
})

const setNftTransactionSuccess = (success) => ({
    type: SET_NFT_TRANSACTION_SUCCESS,
    payload: success
})

const transaction = (transactionOperation) => (contractId, tokenId, price) => async (dispatch) => {
    dispatch(setNftTransactionPending(true))
    transactionOperation(contractId, tokenId, price)
        .then(() => dispatch(setNftTransactionSuccess(true)))
        .catch(() => dispatch(setNftTransactionSuccess(false)))
        .finally(() => dispatch(setNftTransactionPending(false)))
}

export const sellNft = transaction(giveApprove)
export const buyNft = transaction(buyNftWithPayouts)