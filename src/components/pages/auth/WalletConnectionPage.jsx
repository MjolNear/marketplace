import React from 'react';
import {login} from "../../../business-logic/near/contract";
import MjolGreenBlueButton from "../../ui/buttons/MjolGreenBlueButton";

const WalletConnectionPage = () => {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className='w-1/4'>
                <MjolGreenBlueButton onClick={login}>Connect your wallet first</MjolGreenBlueButton>
            </div>
        </div>
    );
};

export default WalletConnectionPage;