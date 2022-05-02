import React, {memo} from 'react';
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";
import {shortenString} from "../../../../utils/string";
import Tooltip, {getContractVerificationTooltipContent} from "../../../Layout/Tooltip";
import {ContractVerificationStatus} from "../../../../@types/Contract";
import ResolveVerificationIcon from "../../../Common/Verification/Icons/ResolveVerificationIcon";
import {AccountId, ContractId} from "../../../../@types/Aliases";

interface TokenPreviewOwnerContractProps {
    ownerId: AccountId
    contractId: ContractId
    mintSiteName?: string
    verification?: ContractVerificationStatus
}

const TokenPreviewOwnerContract: React.FC<TokenPreviewOwnerContractProps> = ({
    ownerId,
    contractId,
    mintSiteName,
    verification
}) => {
    return (
        <section className="font-archivo mb-2">
            <div className="flex flex-row gap-1 mt-1 text-[15px]">
                <label className="text-mjol-secondary-selected">Owned by</label>
                <LightBlueGradientText text={
                    ownerId.endsWith(".near")
                        ? ownerId
                        : shortenString(ownerId, 4, 10)
                }/>
            </div>
            <div className="flex flex-row items-center gap-2 text-[15px]">
                <div className="inline-flex gap-1 text-mjol-secondary-selected">
                    Minted on
                    <label className="font-bold">{mintSiteName || contractId}</label>
                </div>
                <p data-tip={getContractVerificationTooltipContent(verification || ContractVerificationStatus.Unverified)}
                   data-html={true}
                   data-for="contractVerificationTooltip"
                   className="cursor-pointer"
                >
                    <ResolveVerificationIcon verification={verification} iconProps={{size: 16}}/>
                </p>
                <Tooltip id="contractVerificationTooltip" className="font-bold"/>
            </div>
        </section>
    );
};

export default memo(TokenPreviewOwnerContract);