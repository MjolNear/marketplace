import React from 'react';
import {useAppDispatch} from "../../../hooks/redux";
import {ItemMarketStatus} from "../../../state/transaction/state";
import BuyNftContainer from "../../../components/nft-item/preview/status/actions/BuyNftContainer";
import {useNftMarketStatus} from "../../../hooks/useNftMarketStatus";
import {buyNft, sellNft} from "../../../state/transaction/nft/thunk";
import SellNftContainer from "../../../components/nft-item/preview/status/actions/SellNftContainer";
import UnlistNftContainer from "../../../components/nft-item/preview/status/actions/UnlistNftContainer";
import NotListedNftContainer from "../../../components/nft-item/preview/status/NotListedNftContainer";
import {NFT} from "../../../business-logic/models/nft";

interface PropTypes {
    accountId: string,
    nft: NFT
}

const NftStatusHoc: React.FC<PropTypes> = ({accountId, nft}) => {
    const status = useNftMarketStatus(accountId, nft)
    const dispatch = useAppDispatch()

    const buy = () => {
        dispatch(buyNft(nft.contractId, nft.tokenId, nft.price || ''))
    }

    const sell = () => {
        dispatch(sellNft(nft.contractId, nft.tokenId, nft.price || ''))
    }

    const unlist = () => {
        alert('Not implemented')
    }

    switch (status) {
        case ItemMarketStatus.CAN_BUY:
            return <BuyNftContainer price={nft.price} onClick={buy}/>
        case ItemMarketStatus.CAN_SELL:
            return <SellNftContainer price={nft.price} onClick={sell}/>
        case ItemMarketStatus.LISTED:
            return <UnlistNftContainer price={nft.price} onClick={unlist}/>
        case ItemMarketStatus.FREE:
            return <NotListedNftContainer/>

    }
};

export default NftStatusHoc;