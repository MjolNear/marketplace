import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../../Common/Buttons/DarkBlueGradientButton";
import InputPriceModal from "./InputPriceModal";
import {useAppDispatch} from "../../../../../hooks/redux";
import {sellNft} from "../../../../../state/transaction/nft/thunk";
import {ApprovedToken} from "../../../../../business-logic/models/nft";

interface TSellNftProps {
    token: ApprovedToken
    payouts: Record<string, number>
}


const SellNftContainer: React.FC<TSellNftProps> = ({
    token,
    payouts
}) => {

    const dispatch = useAppDispatch()
    const [visible, setVisible] = useState(false)

    const sell = (price: string) => {
        dispatch(sellNft(token.contractId, token.tokenId, price, token))
    }

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(!visible)}/>
            {visible &&
                <InputPriceModal close={() => setVisible(false)}
                                 onClick={sell}
                                 payouts={payouts}
                                 imgSrc={token.media}
                />
            }
        </div>
    );
};

export default SellNftContainer;