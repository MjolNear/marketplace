import React from 'react';
import {useAppDispatch} from "../../../hooks/redux";
import {ItemMarketStatus} from "../../../state/transaction/state";
import BuyNftContainer from "../../../components/Preview/Status/BuyNftContainer";
import {useNftMarketStatus} from "../../../hooks/useNftMarketStatus";
import {buyNft, sellNft, unlistNft} from "../../../state/transaction/nft/thunk";
import SellNftContainer from "../../../components/Preview/Status/sell/SellNftContainer";
import UnlistNftContainer from "../../../components/Preview/Status/unlist/UnlistNftContainer";
import NotListedNftContainer
    from "../../../components/Preview/Status/NotListedNftContainer";
import {Nft} from "../../../business-logic/models/nft";
import {signIn} from "../../../business-logic/near/enviroment/near";
import ConnectWalletButton
    from "../../../components/Preview/Status/connect-wallet/ConnectWalletButton";
import NftContractNotSupported
    from "../../../components/Preview/Status/NftContractNotSupported";

interface PropTypes {
    accountId: string,
    nft: Nft,
    payouts: Record<string, number>
}

const NftStatusHoc: React.FC<PropTypes> = ({accountId, nft, payouts}) => {

    if (!accountId) {
        return <ConnectWalletButton onClick={signIn}/>
    }

    const status = useNftMarketStatus(accountId, nft)
    const dispatch = useAppDispatch()

    const buy = () => {
        dispatch(buyNft(nft.contractId, nft.tokenId, nft.price || ''))
    }

    const sell = (price: string) => {
        dispatch(sellNft(nft.contractId, nft.tokenId, price))
    }

    const unlist = () => {
        dispatch(unlistNft(nft.contractId, nft.tokenId))
    }

    switch (status) {
        case ItemMarketStatus.CAN_BUY:
            return <BuyNftContainer price={nft.price} onClick={buy}/>
        case ItemMarketStatus.CAN_SELL:
            return <SellNftContainer onClick={sell} payouts={payouts}/>
        case ItemMarketStatus.LISTED:
            return <UnlistNftContainer price={nft.price} onClick={unlist}/>
        case ItemMarketStatus.FREE:
            return <NotListedNftContainer/>
        case ItemMarketStatus.NOT_SUPPORTED:
            return <NftContractNotSupported/>

    }
};

export default NftStatusHoc;