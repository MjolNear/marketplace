import React from 'react';
import {useAppDispatch} from "../../../hooks/redux";
import {ItemMarketStatus} from "../../../state/transaction/state";
import BuyNftContainer from "../../../components/nft-item/preview/status/actions/BuyNftContainer";
import {useNftMarketStatus} from "../../../hooks/useNftMarketStatus";
import {buyNft, sellNft, unlistNft} from "../../../state/transaction/nft/thunk";
import SellNftContainer from "../../../components/nft-item/preview/status/actions/SellNftContainer";
import UnlistNftContainer from "../../../components/nft-item/preview/status/actions/UnlistNftContainer";
import NotListedNftContainer from "../../../components/nft-item/preview/status/NotListedNftContainer";
import {NFT} from "../../../business-logic/models/nft";
import {signIn} from "../../../business-logic/near2/near/setup/near";
import ConnectWallet from "../../../components/nft-item/preview/status/actions/ConnectWallet";

interface PropTypes {
    accountId: string,
    nft: NFT
}

const NftStatusHoc: React.FC<PropTypes> = ({accountId, nft}) => {

    if (!accountId) {
        return <ConnectWallet price={nft.price} onClick={signIn}/>
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

    }
};

export default NftStatusHoc;