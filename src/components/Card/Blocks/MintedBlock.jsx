import React from 'react';
import {GoUnverified, GoVerified} from "react-icons/go";

const MintedBlock = React.memo(({mintedName: marketName, mintedLink}) => {
    return (
        <>
            <div className="flex gap-1">
                {marketName !== 'unsupported contract'
                    ? <GoVerified size={14} color="#18b3cc"/>
                    : <GoUnverified size={14} color=""/>
                }
                <a className="text-mjol-purple-dark font-bold text-tiny-4 hover:opacity-80"
                   href={mintedLink}
                   target="_blank"
                >
                    {marketName === 'unsupported contract' ? 'Not verified' : `Minted on ${marketName}`}
                </a>
            </div>
            <hr className="border-mjol-purple-dark"/>
        </>
    );
});

export default MintedBlock;