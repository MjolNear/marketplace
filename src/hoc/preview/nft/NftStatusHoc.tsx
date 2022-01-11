import React from 'react';
import {useAppDispatch} from "../../../hooks/redux";
import {ItemMarketStatus} from "../../../state/transaction/state";
import BuyNftContainer from "../../../components/nft-item/preview/status/actions/buy/BuyNftContainer";
import {useNftMarketStatus} from "../../../hooks/useNftMarketStatus";
import {buyNft, sellNft, unlistNft} from "../../../state/transaction/nft/thunk";
import SellNftContainer from "../../../components/nft-item/preview/status/actions/sell/SellNftContainer";
import UnlistNftContainer from "../../../components/nft-item/preview/status/actions/unlist/UnlistNftContainer";
import NotListedNftContainer
    from "../../../components/nft-item/preview/status/actions/not-listed/NotListedNftContainer";
import {Nft} from "../../../business-logic/models/nft";
import {signIn} from "../../../business-logic/near2/near/setup/near";
import ConnectWalletButton
    from "../../../components/nft-item/preview/status/actions/connect-wallet/ConnectWalletButton";
import NftContractNotSupported
    from "../../../components/nft-item/preview/status/actions/not-supported/NftContractNotSupported";

interface PropTypes {
    accountId: string,
    nft: Nft
}

const NftStatusHoc: React.FC<PropTypes> = ({accountId, nft}) => {

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
            return <SellNftContainer onClick={sell}/>
        case ItemMarketStatus.LISTED:
            return <UnlistNftContainer price={nft.price} onClick={unlist}/>
        case ItemMarketStatus.FREE:
            return <NotListedNftContainer/>
        case ItemMarketStatus.NOT_SUPPORTED:
            return <NftContractNotSupported/>

    }
};

export default NftStatusHoc;