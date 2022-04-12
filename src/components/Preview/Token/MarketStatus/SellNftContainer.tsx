import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import InputPriceModal from "./sell/InputPriceModal";
import {ApprovedToken} from "../../../../business-logic/types/nft";
import {giveApprove} from "../../../../near/transaction";
import {useFetchTokenCollection} from "../../../../hooks/collection/useFetchTokenCollection";

interface TSellNftProps {
    token: ApprovedToken
    payouts: Record<string, number>
}


const SellNftContainer: React.FC<TSellNftProps> = ({
    token,
    payouts
}) => {

    // Already cached the collection in apollo store.
    const collection = useFetchTokenCollection(token.contractId, token.extra)

    const [visible, setVisible] = useState(false)

    const sell = (price: string) => giveApprove(token, price, collection.data)

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