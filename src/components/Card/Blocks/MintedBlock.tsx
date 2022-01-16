import React from 'react';
import {GoUnverified, GoVerified} from "react-icons/go";
import DarkBlueMjolText from "../../Common/text/DarkBlueMjolText";


interface PropsTypes {
    market?: string,
    link?: string
}

const MintedBlock = React.memo<PropsTypes>(({market, link}) => {
    return (
        <>
            <div className="flex gap-1 items-center">
                {market !== 'unsupported contract'
                    ? <GoVerified size={14} color="#18b3cc"/>
                    : <GoUnverified size={14} color=""/>
                }
                <a className="text-mjol-purple-dark opacity-80 font-bold text-tiny-4 hover:opacity-90"
                   href={link}
                   target="_blank"
                >
                    {market === 'unsupported contract' ? 'Not verified' : `Minted on ${market}`}
                </a>
            </div>
            <hr className="border-mjol-purple-dark"/>
        </>
    );
});

export default MintedBlock;