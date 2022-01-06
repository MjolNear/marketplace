import React from 'react';
import withPriceContainer from "./withPriceContainer";
import MjolGreenBlueButton from "../../../../ui/buttons/MjolGreenBlueButton";

const BuyNftContainer = (props) => {
    return (
        <MjolGreenBlueButton {...props}>
            Buy NFT
        </MjolGreenBlueButton>
    );
};

export default withPriceContainer(BuyNftContainer);