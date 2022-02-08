import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNft} from "../../../state/preview/nft/thunk";
import withAuthData, {SignedInProps} from "../../../hoc/withAuthData";
import NotFoundPage from "../../not-found/NotFoundPage";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import {useParams} from "react-router";
import MjolLoader from "../../../components/Common/Loaders/MjolLoader";
import PreviewNftImage from "../../../components/Preview/Card/PreviewNftImage";
import NftPreviewInfo from "../../../components/Preview/Card/Blocks/NftPreviewInfo";
import {getNftMarketStatus} from "../../../hooks/getNftMarketStatus";
import ConnectWalletButton from "../../../components/Preview/Card/Status/connect-wallet/ConnectWalletButton";
import {ItemMarketStatus} from "../../../state/transaction/state";
import BuyNftContainer from "../../../components/Preview/Card/Status/BuyNftContainer";
import {buyNft, sellNft, unlistNft} from "../../../state/transaction/nft/thunk";
import SellNftContainer from "../../../components/Preview/Card/Status/sell/SellNftContainer";
import UnlistNftContainer from "../../../components/Preview/Card/Status/UnlistNftContainer";
import NftContractNotSupported from "../../../components/Preview/Card/Status/NftContractNotSupported";
import NotListedNftContainer from "../../../components/Preview/Card/Status/NotListedNftContainer";
import {fetchNearUsdPrice} from "../../../hooks/fetchNearUsdPrice";

interface PropTypes extends SignedInProps {
}

type NftRouteParams = {
    contractId: string,
    tokenId: string,
}

const PreviewNftPage: React.FC<PropTypes> = ({accountId}) => {
    const {contractId, tokenId} = useParams<NftRouteParams>()
    const {nft, fetching, payouts, contract} = useAppSelector(state => state.preview.nft)
    const dispatch = useAppDispatch()

    const [usdPrice, setUsdPrice] = useState("0")


    useEffect(() => {
        if (!contractId || !tokenId) {
            return
        }
        dispatch(fetchNft(contractId, tokenId))
        fetchNearUsdPrice().then(setUsdPrice)
        return () => {
            dispatch(previewNftSlice.actions.reset())
        }
    }, [accountId, contractId, dispatch, tokenId])

    if (!contractId || !tokenId) {
        return <NotFoundPage/>
    }

    if (fetching) {
        return <MjolLoader/>
    }
    if (!nft) {
        return <NotFoundPage/>
    }

    const getStatus = () => {
        if (!accountId) {
            return <ConnectWalletButton/>
        }

        const nftStatus = getNftMarketStatus(accountId, nft)
        if (!contract?.isCorrect) {
            return <NftContractNotSupported missedNeps={contract?.missedNeps || []}/>
        }
        switch (nftStatus) {
            case ItemMarketStatus.CAN_BUY:
                return <BuyNftContainer nearPrice={nft.price}
                                        usdPrice={usdPrice}
                                        onClick={
                                            () => dispatch(
                                                buyNft(
                                                    contractId,
                                                    tokenId,
                                                    nft.price || '',
                                                    contract?.hasPayouts
                                                )
                                            )
                                        }
                />
            case ItemMarketStatus.CAN_SELL:
                return <SellNftContainer imgSrc={nft.mediaURL}
                                         payouts={payouts}
                                         onClick={
                                             (price: string) => dispatch(sellNft(contractId, tokenId, price, nft))
                                         }
                />
            case ItemMarketStatus.LISTED:
                return <UnlistNftContainer nearPrice={nft.price}
                                           usdPrice={usdPrice}
                                           onClick={
                                               () => dispatch(unlistNft(contractId, tokenId))
                                           }/>
            case ItemMarketStatus.FREE:
                return <NotListedNftContainer/>
        }
    }


    return (
        <div className="grid md:grid-cols-2 gap-8 min-h-screen p-5 xs:p-10 md:items-start">
            <PreviewNftImage link={nft.mediaURL} imageName={nft.title}/>
            <NftPreviewInfo nft={nft}
                            payouts={payouts}
                            contract={contract}
                            statusElement={getStatus()}
            />
        </div>
    )
};

export default withAuthData(PreviewNftPage);
