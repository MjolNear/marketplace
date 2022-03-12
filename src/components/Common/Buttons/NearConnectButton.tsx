import React from 'react';
import NearIcon from "../../Icons/near/NearIcon";
import {getCurrentWallet} from "../../../business-logic/near/wallet/wallet";


const NearConnectButton = () => {
    return (
        <button
            className="bg-black font-bold inline-flex items-center rounded-3xl px-3 py-2
                       hover:bg-opacity-90 hover:shadow-mjol-gray-xs w-[300px]"
            onClick={() => getCurrentWallet().requestSignIn()}
        >
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