import React from 'react';
import ResolveVerificationIcon from "../../Common/Verification/Icons/ResolveVerificationIcon";
import {ContractVerificationStatus} from "../../../@types/Contract";
import classNames from "../../../utils/css-utils";
import {CardSize, useCardSize} from "../../../context/CardSizeContext";
import {ContractId} from "../../../@types/Aliases";
import {shortenString} from "../../../utils/string";

interface TMintedInfoProps {
    contractId: ContractId
    contractName: string
    verification: ContractVerificationStatus
}

const MintedBlock: React.FC<TMintedInfoProps> = ({
    contractId,
    contractName,
    verification
}) => {
    const size = useCardSize()
    return (
        <>
            <div className={classNames("flex gap-1 items-center", size === CardSize.Big ? "mt-3" : "mt-2")}>
                <ResolveVerificationIcon verification={verification}
                                         iconProps={{size: size === CardSize.Big ? 13 : 9}}
                />
                <div className={classNames(
                    "text-mjol-secondary font-semibold font-archivo inline-flex gap-1",
                    size === CardSize.Big ? "text-xs" : "text-[9px]"
                )}
                >
                    Minted on
                    <span className="text-blue-400">{
                        verification === ContractVerificationStatus.Verified
                            ? contractName
                            : shortenString(contractId, 7, 15)
                    }
                    </span>
                </div>
            </div>
            <div className="h-[1px] mt-[3px] rounded-2xl bg-blue-300"/>
        </>
    );
};

export default MintedBlock;