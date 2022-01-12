import React from 'react';
import {signIn} from "../../../business-logic/near/enviroment/near";
import MjolGreenBlueButton from "../../ui/buttons/MjolGreenBlueButton";

const WalletConnectionPage = () => {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className='w-1/4'>
                <MjolGreenBlueButton onClick={singIn}>Connect your wallet first</MjolGreenBlueButton>
            </div>
        </div>
    );
};

export default WalletConnectionPage;