import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNft} from "../../../state/preview/nft/thunk";
import withAuthData, {SignedInProps} from "../../../hoc/withAuthData";
import NotFoundPage from "../../not-found/NotFoundPage";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import {useParams} from "react-router";
import MjolLoader from "../../../components/Common/loaders/MjolLoader";
import PreviewNftImage from "../../../components/Preview/PreviewNftImage";
import NftPreviewInfo from "../../../components/Preview/Blocks/NftPreviewInfo";

interface PropTypes extends SignedInProps {
}

type ParamTypes = {
    contractId: string,
    tokenId: string,
}

const PreviewNftPage: React.FC<PropTypes> = ({accountId}) => {
    const {contractId, tokenId} = useParams<ParamTypes>()
    const {nft, fetching, payouts} = useAppSelector(state => state.preview.nft)
    const dispatch = useAppDispatch()

    if (!contractId || !tokenId) {
        return <NotFoundPage/>
    }

    useEffect(() => {
        dispatch(fetchNft(contractId, tokenId))
        return () => {
            dispatch(previewNftSlice.actions.reset())
        }
    }, [accountId])

    if (fetching) {
        return <MjolLoader/>
    }
    if (!nft) {
        return <NotFoundPage/>
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 min-h-screen bg-mjol-white p-5 xs:p-10 md:items-start">
            <PreviewNftImage link={nft.mediaURL}/>
            <NftPreviewInfo nft={nft}
                            payouts={payouts}
                            statusElement={undefined}
            />
        </div>
    )
};

export default withAuthData(PreviewNftPage);
