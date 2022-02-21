import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNft} from "../../../state/preview/nft/thunk";
import withAuthData, {SignedInProps} from "../../../hoc/withAuthData";
import NotFoundPage from "../../not-found/NotFoundPage";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import {useParams} from "react-router";
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
import {ContractVerificationStatus} from "../../../business-logic/models/contract";
import NftNotApproved from "../../../components/Preview/Card/Status/NftNotApproved";
import CardActivity from "../../../components/Activity/CardActivity";
import {buildUID} from "../../../business-logic/near/api/utils";
import DropDownMjolBlueButton from "../../../components/Common/Buttons/DropDownMjolBlueButton";
import IconText from "../../../components/Icons/IconText";
import {GiBuyCard} from "react-icons/gi";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";

interface PropTypes extends SignedInProps {
}

type NftRouteParams = {
    contractId: string,
    tokenId: string,
}

const PreviewNftPage: React.FC<PropTypes> = ({accountId}) => {
    const {contractId, tokenId} = useParams<NftRouteParams>()
    const {token, fetching, payouts, contract, isApproved} = useAppSelector(state => state.preview.nft)
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
        return <CreateLoader/>
    }
    if (!token) {
        return <NotFoundPage/>
    }

    const getStatus = () => {
        if (!accountId) {
            return <ConnectWalletButton/>
        }

        if (!isApproved && token.price !== null) {
            return <NftNotApproved/>
        }

        const nftStatus = getNftMarketStatus(accountId, token)
        if (!contract || contract.verification === ContractVerificationStatus.NotSupported) {
            return <NftContractNotSupported missedNeps={contract?.missedNeps}/>
        }
        switch (nftStatus) {
            case ItemMarketStatus.CAN_BUY:
                return <BuyNftContainer nearPrice={token.price}
                                        usdPrice={usdPrice}
                                        onClick={
                                            () => dispatch(
                                                buyNft(
                                                    contractId,
                                                    tokenId,
                                                    token.price || '',
                                                    contract?.hasPayouts
                                                )
                                            )
                                        }
                />
            case ItemMarketStatus.CAN_SELL:
                return <SellNftContainer imgSrc={token.media}
                                         payouts={payouts}
                                         onClick={
                                             (price: string) => dispatch(sellNft(contractId, tokenId, price, token))
                                         }
                />
            case ItemMarketStatus.LISTED:
                return <UnlistNftContainer nearPrice={token.price}
                                           usdPrice={usdPrice}
                                           onClick={
                                               () => dispatch(unlistNft(contractId, tokenId))
                                           }/>
            case ItemMarketStatus.FREE:
                return <NotListedNftContainer/>
        }
    }

    return (
        <div
            className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 pt-10
                       flex flex-col justify-center items-center gap-6 lg:gap-10 max-w-[1200px] mx-auto"
        >
            <div className="flex flex-col gap-6 justify-center w-full
                            lg:items-start lg:flex-row"
            >
                <PreviewNftImage link={token.media} imageName={token.title}/>
                <NftPreviewInfo nft={token}
                                payouts={payouts}
                                contract={contract}
                                statusElement={getStatus()}
                />
            </div>
            <div className="w-full mb-10">
                <DropDownMjolBlueButton buttonContent={
                    <IconText icon={<GiBuyCard/>}
                              text="Activity"
                              className="group-hover:text-black text-gray-800"
                    />
                }>
                    <CardActivity activities={[]}
                                  tokenUID={buildUID(token.contractId, token.tokenId)}/>
                </DropDownMjolBlueButton>

            </div>
        </div>
    )
};

export default withAuthData(PreviewNftPage);
