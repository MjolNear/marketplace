import React from 'react';
import ResolveVerificationIcon from "../../Common/Verification/Icons/ResolveVerificationIcon";
import {ContractVerificationStatus} from "../../../business-logic/types/contract";
import {resolveVerificationText} from "../../Common/Verification/utils";
import DarkBlueMjolText from "../../Common/Text/DarkBlueMjolText";
import classNames from "../../../utils/css-utils";
import {CardSize, useCardSize} from "../../../context/CardSizeContext";

interface TMintedInfoProps {
    mintedSiteName: string
    mintedSiteLink: string
    verification: ContractVerificationStatus
}

const MintedBlock: React.FC<TMintedInfoProps> = ({
    mintedSiteLink,
    mintedSiteName,
    verification
}) => {
    const size = useCardSize()
    return (
        <>
            <div className={classNames("flex gap-1 items-center", size === CardSize.Big ? "mt-3" : "mt-2")}>
                <ResolveVerificationIcon verification={verification}
                                         iconProps={{size: size === CardSize.Big ? 13 : 9}}
                />
                {verification === ContractVerificationStatus.Verified
                    ?
                    <a className={classNames(
                        "text-black opacity-80 font-bold font-archivo group hover:opacity-100",
                        size === CardSize.Big ? "text-xs" : "text-[9px]"
                    )}
                       href={mintedSiteLink}
                       target="_blank"
                       rel="noreferrer"
                    >
                        <div className="inline-flex gap-[3px]">
                            Minted on
                            <DarkBlueMjolText text={mintedSiteName} classes="text-center font-bold"/>
                        </div>
                    </a>
                    :
                    <div className={classNames(
                        "text-black opacity-80 font-bold font-archivo group hover:opacity-100",
                        size === CardSize.Big ? "text-xs" : "text-[9px]"
                    )}>
                        {resolveVerificationText(verification)}
                    </div>
                }
            </div>
            <div className="h-[1px] bg-blue-200 mt-[3px] rounded-lg"/>
        </>
    );
};

export default MintedBlock;