import React from 'react';
import withPriceContainer from "./withPriceContainer";
import MjolGreenBlueButton from "../../../../ui/buttons/MjolGreenBlueButton";

const SellNftContainer = (props) => {
    return (
        <MjolGreenBlueButton {...props}>
            Sell NFT
        </MjolGreenBlueButton>
    );
};

export default withPriceContainer(SellNftContainer);