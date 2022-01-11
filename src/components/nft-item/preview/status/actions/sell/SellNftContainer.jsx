import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../../../ui/buttons/DarkBlueGradientButton";
import Modal from "../../../../../ui/modal/Modal";
import useComponentVisible from "../../../../../../hooks/useComponentVisible";

const SellNftContainer = ({onClick}) => {

    const {ref, visible, setVisible} = useComponentVisible(false)

    return (
        <div>
            <DarkBlueGradientButton title="Sell NFT" onClick={() => setVisible(true)}/>
            <Modal ref={ref} visible={visible}/>
        </div>
    );
};

export default SellNftContainer;