import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/buttons/DarkBlueGradientButton";
import InputPriceModal from "./InputPriceModal";


const SellNftContainer = ({onClick, payouts, imgSrc}) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(!visible)}/>
            {visible &&
                <InputPriceModal close={() => setVisible(false)}
                                 onClick={onClick}
                                 payouts={payouts}
                                 imgSrc={imgSrc}
                />
            }
        </div>
    );
};

export default SellNftContainer;