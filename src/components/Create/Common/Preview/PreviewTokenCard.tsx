import React from 'react';
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";
import {ContractVerificationStatus} from "../../../../@types/Contract";
import {WhitelistedContract} from "../../../../business-logic/whitelisted.contract";
import ResolveVerificationIcon from "../../../Common/Verification/Icons/ResolveVerificationIcon";
import DarkBlueMjolText from "../../../Common/Text/DarkBlueMjolText";
import {Img} from "react-image";

interface PreviewMintedTokenCardProps {
    title: string,
    url: string
    collectionName?: string
}

const PreviewTokenCard: React.FC<PreviewMintedTokenCardProps> = ({
    title,
    url,
    collectionName
}) => {
    return (
            <div className="flex flex-col justify-between overflow-hidden rounded-xl
                            ring-1 ring-blue-300 select-none w-full max-w-[280px]"
            >
                <div>
                    <div className="aspect-w-1 aspect-h-1 justify-center z-10">
                        {url
                            ? <Img src={url} className="w-full h-full object-contain"/>
                            : <div className="w-full h-full bg-gray-50"/>
                        }
                    </div>
                    <div className="px-2 xxs:px-5 mt-2 font-extrabold font-archivo text-black truncate text-sm">
                        {title}
                    </div>
                </div>
                <div className="px-2 xxs:px-5">
                    <div className="mb-3">
                        {collectionName &&
                            <div className="text-xs font-bold font-archivo truncate text-gray-800 opacity-75">
                                {collectionName}
                            </div>
                        }
                    </div>
                    <div className="flex gap-1 items-center">
                        <ResolveVerificationIcon verification={ContractVerificationStatus.Verified}
                                                 iconProps={{size: 12}}
                        />
                        <div className="inline-flex gap-[3px] text-xs-2">
                            Minted on
                            <DarkBlueMjolText text={WhitelistedContract.MjolNear} classes="text-center font-bold"/>
                        </div>
                    </div>
                    <div className="h-[1px] bg-blue-200 mt-[3px] rounded-lg"/>
                    <div className="mt-2 mb-1 grid place-items-end">
                        <div className="flex items-center gap-2">
                            <LightBlueGradientText text="Not listed" size="md" fontWeight="black"/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PreviewTokenCard;