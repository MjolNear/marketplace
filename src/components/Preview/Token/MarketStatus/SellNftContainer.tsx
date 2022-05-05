import React, {useState} from 'react';
import InputPriceModal from "./sell/InputPriceModal";
import {ApprovedToken} from "../../../../@types/Token";
import {giveApprove} from "../../../../near/transaction";
import {useFetchTokenCollection} from "../../../../hooks/collection/useFetchTokenCollection";
import DarkBlueGradientButton from "../../../../@ui/Buttons/DarkBlueGradientButton";

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
            <InputPriceModal isOpen={visible}
                             close={() => setVisible(false)}
                             onClick={sell}
                             payouts={payouts}
                             imgSrc={token.media}
            />
        </div>
    );
};

export default SellNftContainer;