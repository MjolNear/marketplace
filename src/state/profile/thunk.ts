import {getNfts} from "../../business-logic/near/api/nfts/get-nfts";

import {AppDispatch} from "../store";
import {profileSlice} from "./slice";

export const fetchMyNfts = (accountId: string) => async (dispatch: AppDispatch) => {
    dispatch(profileSlice.actions.toggleFetching(false))
    getNfts(accountId)
        .then(contracts => contracts
            .forEach(contractNfts =>
                contractNfts.then(nfts =>
                    nfts.forEach(promiseNft =>
                        promiseNft.then(nft => dispatch(profileSlice.actions.addNft(nft)))
                    )
                )
            )
        )
}