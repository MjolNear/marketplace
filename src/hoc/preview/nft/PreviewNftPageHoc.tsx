import React, {useEffect, useState} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNft} from "../../../state/preview/nft/thunk";
import withAccountId from "../../withAccountId";
import RoundLoader from "../../../components/ui/loaders/RoundLoader";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import {useParams} from "react-router";
import NftStatusHoc from "./NftStatusHoc";
import useDelayUnmount from "../../../hooks/useDelayUnmount";

interface PropTypes {
    accountId: string
}

type ParamTypes = {
    contractId: string,
    tokenId: string
}

const PreviewNftPageHoc: React.FC<PropTypes> = ({accountId}) => {
    const {contractId, tokenId} = useParams<ParamTypes>()

    if (!contractId || !tokenId) {
        return <NotFoundPage/>
    }

    const {nft, fetching, payouts} = useAppSelector(state => state.preview.nft)
    const dispatch = useAppDispatch()

    useEffect((): any => {
        dispatch(fetchNft(contractId, tokenId))
        return () => dispatch(previewNftSlice.actions.reset())
    }, [accountId])

    if (fetching) {
        return <RoundLoader/>
    }

    if (!nft) {
        return <NotFoundPage/>
    }

    return (
        <PreviewNftPage nft={nft}
                        payouts={payouts}
                        statusElement={
                            <NftStatusHoc nft={nft}
                                          accountId={accountId}
                            />
                        }
        />)
};

export default withAccountId(PreviewNftPageHoc);
