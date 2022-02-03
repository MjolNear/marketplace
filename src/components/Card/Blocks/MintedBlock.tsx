import React from 'react';
import {GoUnverified, GoVerified} from "react-icons/go";

interface PropsTypes {
    market?: string,
    link?: string
}

const MintedBlock = React.memo<PropsTypes>(({market, link}) => {
    return (
        <>
            <div className="flex gap-1 items-center">
                {market !== 'unsupported contract'
                    ? <GoVerified size={15} color="rgb(0, 163, 255)"/>
                    : <GoUnverified size={15} color=""/>
                }
                <a className="text-black opacity-80 font-archivo font-bold text-tiny-5 hover:opacity-90"
                   href={link}
                   target="_blank"
                   rel="noreferrer"
                >
                    {market === 'unsupported contract' ? 'Not verified' : `Minted on ${market}`}
                </a>
            </div>
            <div className="h-[1px] bg-blue-200 mt-[3px] rounded-lg"/>
        </>
    );
});

export default MintedBlock;