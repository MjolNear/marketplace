import React from 'react';

const PriceLoading = () => {
    return (
        <div className="rounded-xl px-6 py-4 bg-mjol-blue-card-property flex flex-col">
            <div className="font-bold font-archivo text-left text-sm text-gray-600 w-full">
                Fetching price
                <hr/>
                <div className="flex items-center justify-center pt-4">
                    <div className="dot-flashing"/>
                </div>
            </div>
        </div>
    );
};

export default PriceLoading;