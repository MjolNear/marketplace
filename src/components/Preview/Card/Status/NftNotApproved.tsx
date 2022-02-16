import React from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";

const NftNotApproved = () => {
    return (
        <>
            <div className="text-center rounded-lg p-4 space-y-5 bg-blue-100 font-semibold font-archivo text-md text-black">
                <div>NFT has just been sold or transferred</div>
                <DarkBlueGradientButton title="Reload the page" onClick={() => window.location.reload()}/>
            </div>
        </>
    );
};

export default NftNotApproved;