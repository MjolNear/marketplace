import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../../../ui/buttons/DarkBlueGradientButton";
import InputPriceModal from "./InputPriceModal";


const SellNftContainer = ({onClick, payouts}) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(!visible)}/>
            <InputPriceModal visible={visible} setVisible={setVisible} onClick={onClick} payouts={payouts}/>
        </div>
    );
};

export default SellNftContainer;