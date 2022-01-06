import {getNfts} from "../../business-logic/near/get-nfts";

import {AppDispatch} from "../store";
import {profileSlice} from "./slice";

export const fetchMyNfts = (accountId: number) => async (dispatch: AppDispatch) => {
    dispatch(profileSlice.actions.startFetching())
    getNfts(accountId)
        .then(nfts => {
                nfts.map(nftPromise =>
                    nftPromise
                        .then(nft => {
                            //console.log(nft)
                            dispatch(profileSlice.actions.addNft(nft))
                        })
                        .catch(() => console.log('NFT not found'))
                )
                dispatch(profileSlice.actions.success())
            }
        )
        .catch(() => dispatch(profileSlice.actions.failure()))
}