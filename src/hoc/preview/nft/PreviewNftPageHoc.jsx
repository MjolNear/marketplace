import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNft} from "../../../state/preview/nft/thunk";
import withAccountId from "../../withAccountId";
import RoundLoader from "../../../components/ui/loaders/RoundLoader";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import {useParams} from "react-router";

const PreviewNftPageHoc = ({accountId}) => {
    const {contractId, tokenId} = useParams()
    const {nft, success, fetching, payouts} = useAppSelector(state => state.preview.nft)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchNft(accountId, contractId, tokenId))
        return () => dispatch(previewNftSlice.actions.reset())
    }, [])

    if (fetching) {
        return <RoundLoader/>
    }

    if (!success) {
        return <NotFoundPage/>
    }

    return <PreviewNftPage nft={nft} payouts={payouts}/>
};

export default withAccountId(PreviewNftPageHoc);
