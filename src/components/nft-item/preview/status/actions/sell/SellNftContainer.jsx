import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../../../ui/buttons/DarkBlueGradientButton";
import InputPriceModal from "../../../../../ui/modal/InputPriceModal";


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