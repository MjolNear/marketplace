import React from 'react';
import NearConnectButton from "../../components/Common/Buttons/NearConnectButton";
import light from '../../resources/light.jpeg'

const WalletConnectionPage = () => {
    return (
        <div className="flex flex-row min-h-screen">
            <div className="hidden md:block" style={{
                width: 350
            }}>
                <img
                    src={light}
                    alt="loading..."
                    className="h-full"
                />
            </div>
            <div className="pt-10 flex justify-center">
                <div className="flex flex-col text-center" style={{
                    width: 350,
                }}>
                    <div className="text-3xl font-bold w-full">Sign in with your wallet</div>
                    <span className="w-full">Sign in with one of available wallet providers or create a new wallet.</span>
                    <NearConnectButton/>
                </div>
            </div>
        </div>
    );
};

export default WalletConnectionPage;