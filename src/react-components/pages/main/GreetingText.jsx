import React from 'react';

const GreetingText = () => {
    return (
        <div className="w-1/2 space-y-14">
            <div
                className="text-3xl text-left md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-pink-500 flex-end">
                Welcome to Nea Sea
            </div>
            <div className="text-sm md:text-lg font-mono">
                The first NFT marketplace that enables creators to choose and embed licenses when they mint NFTs.
                <br/>
                Creators know what they are selling, collectors know what they are buying. Join the revolution.
            </div>
        </div>
    );
};

export default GreetingText;