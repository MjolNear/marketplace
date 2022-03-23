import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../../Common/Buttons/DarkBlueGradientButton";
import InputPriceModal from "./InputPriceModal";
import {ApprovedToken} from "../../../../../business-logic/models/nft";
import {giveApprove} from "../../../../../business-logic/near/api/market/transaction";

interface TSellNftProps {
    token: ApprovedToken
    payouts: Record<string, number>
}


const SellNftContainer: React.FC<TSellNftProps> = ({
    token,
    payouts
}) => {

    const [visible, setVisible] = useState(false)

    const sell = (price: string) => giveApprove(token.contractId, token.tokenId, price, token)

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(true)}/>
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