import React from 'react';

const GreetingText = () => {
    return (
        <div className="max-w-7xl mx-auto w-1/2 space-y-14 h-screen">
            <div
                className="text-3xl text-left md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-mjol-blue-base to-green-200 flex-end">
                Welcome to MjolNear
            </div>
            <div className="text-sm md:text-lg font-mono">
                The first Open NFT marketplace on Near blockchain.
            </div>
        </div>
    );
};

export default GreetingText;