import React from 'react';
import NearWithText from "../../Icons/near/NearWithText";
import walletBackground from '../../../resources/near-wallet.png'
import WhiteNearIcon from "../../Icons/near/WhiteNearIcon";
import NearIcon from "../../Icons/near/NearIcon";


const NearConnectButton = () => {
    return (
        <button className="bg-black font-bold inline-flex items-center rounded-3xl px-3 py-2
                            hover:bg-opacity-90 hover:shadow-mjol-gray-xs
                            "
             style={{
                 width:300,
             }}>
            <div className="justify-self-start">
                <NearIcon size={32} fill="white"/>
            </div>
            <div className="inline-flex gap-1 flex-grow justify-center">
                <div className="text-white">
                    Sign in with
                </div>
                <div className="text-cyan-500">
                    NEAR
                </div>
            </div>
        </button>
    );
};

export default NearConnectButton;