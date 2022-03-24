import React from 'react';
import PriceContainer from "./PriceContainer";
import ConnectWalletButton from "./ConnectWalletButton";
import {Optional} from "../../../../business-logic/models/types";

interface PriceConnectWalletProps {
    tokenPrice?: Optional<string>
}

const PriceConnectWalletContainer: React.FC<PriceConnectWalletProps> = ({
    tokenPrice
}) => {
    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <ConnectWalletButton/>
        </PriceContainer>
    );
};

export default PriceConnectWalletContainer;