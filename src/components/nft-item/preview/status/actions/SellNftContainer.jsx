import React, {useState} from 'react';
import InputPriceModal from "../../../../ui/modal/InputPriceModal";
import DarkBlueGradientButton from "../../../../ui/buttons/DarkBlueGradientButton";

const SellNftContainer = ({onClick}) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(true)}/>
            <InputPriceModal hidden={!visible} setVisible={setVisible} onClick={onClick}/>
        </div>
    );
};

export default SellNftContainer;