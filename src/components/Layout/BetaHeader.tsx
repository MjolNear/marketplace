import React from 'react';

const BetaHeader = () => {
    return (
        <div className="bg-blue-500 text-center py-0.5">
            <div className="inline-flex gap-1 font-archivo text-[14px] text-white">
                Alpha version. Please report bugs
                <a href="https://t.me/mj0lnear"
                   target="_blank"
                   rel="noreferrer"
                   className="underline font-semibold"
                >
                  here
                </a>
            </div>
        </div>
    );
};

export default BetaHeader;