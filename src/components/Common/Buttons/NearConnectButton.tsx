import React from 'react';
import {getCurrentWallet} from "../../../business-logic/near/wallet/wallet";
import NearIcon from "../../Icons/near/NearIcon";


const NearConnectButton = () => {
    return (
        <button
            className="bg-black font-bold inline-flex items-center rounded-3xl px-4 py-3
                       hover:bg-opacity-90 hover:drop-shadow-2xl w-[300px]"
            onClick={() => getCurrentWallet().requestSignIn()}
        >
            <div className="justify-self-start">
                <NearIcon size={20} fill="fill-white"/>
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