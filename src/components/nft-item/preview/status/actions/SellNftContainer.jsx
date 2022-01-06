import React, {useState} from 'react';
import withPriceContainer from "./withPriceContainer";
import MjolGreenBlueButton from "../../../../ui/buttons/MjolGreenBlueButton";
import InputPriceModal from "../../../../ui/modal/InputPriceModal";

const SellNftContainer = ({onClick}) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <MjolGreenBlueButton onClick={() => setVisible(true)}>
                Sell NFT
            </MjolGreenBlueButton>
            <InputPriceModal hidden={!visible} setVisible={setVisible} onClick={onClick}/>
        </div>
    );
};

export default SellNftContainer;