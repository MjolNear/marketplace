import React from 'react';
import withPriceContainer from "./withPriceContainer";
import MjolGreenBlueButton from "../../../../ui/buttons/MjolGreenBlueButton";

const UnlistNftContainer = (props) => {
    return (
        <MjolGreenBlueButton {...props}>
            Unlist NFT
        </MjolGreenBlueButton>
    );
};

export default withPriceContainer(UnlistNftContainer);