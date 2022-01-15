import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/buttons/DarkBlueGradientButton";
import InputPriceModal from "./InputPriceModal";


const SellNftContainer = ({onClick, payouts}) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(!visible)}/>
            {visible &&
                <InputPriceModal close={() => setVisible(false)} onClick={onClick} payouts={payouts}/>
            }
        </div>
    );
};

export default SellNftContainer;