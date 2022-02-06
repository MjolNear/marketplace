import React from 'react';
import {NftMintedInfo} from "../../../business-logic/whitelisted.contracts";
import ResolveVerificationIcon from "../../Common/Verification/Icons/ResolveVerificationIcon";
import {ContractVerificationStatus} from "../../../business-logic/models/contract";
import {resolveVerificationText} from "../../Common/Verification/utils";
import LightBlueGradientText from "../../Common/Text/LightBlueGradientText";
import DarkBlueMjolText from "../../Common/Text/DarkBlueMjolText";

interface PropsTypes {
    mintedInfo: NftMintedInfo
}

const MintedBlock = React.memo<PropsTypes>(({mintedInfo}) => {
    const verification = mintedInfo.verification
    return (
        <>
            <div className="flex gap-1 items-center">
                <ResolveVerificationIcon verification={verification}/>
                {verification === ContractVerificationStatus.Verified
                    ?
                    <a className="text-black opacity-80 font-bold font-archivo text-xs group hover:opacity-100"
                       href={mintedInfo.link}
                       target="_blank"
                       rel="noreferrer"
                    >
                        <div className="inline-flex gap-[3px]">
                            Minted on
                            <DarkBlueMjolText text={mintedInfo.name} classes="text-center font-bold"/>
                        </div>
                    </a>
                    :
                    <div className="text-black opacity-80 font-archivo font-archivo font-bold text-xs">
                        {resolveVerificationText(verification)}
                    </div>
                }
            </div>
            <div className="h-[1px] bg-blue-200 mt-[3px] rounded-lg"/>
        </>
    );
});

export default MintedBlock;