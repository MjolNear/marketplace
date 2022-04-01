import React from 'react';
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";
import {prettyAccount, shortenString} from "../../../../utils/string";
import Tooltip, {getContractVerificationTooltipContent} from "../../../Layout/Tooltip";
import {ContractVerificationStatus} from "../../../../business-logic/models/contract";
import ResolveVerificationIcon from "../../../Common/Verification/Icons/ResolveVerificationIcon";
import {AccountId, ContractId} from "../../../../business-logic/types/aliases";

interface TokenPreviewOwnerContract {
    ownerId: AccountId
    contractId: ContractId
    mintSiteName?: string
    verification?: ContractVerificationStatus
}

const TokenPreviewOwnerContract: React.FC<TokenPreviewOwnerContract> = ({
    ownerId,
    contractId,
    mintSiteName,
    verification
}) => {
    return (
        <section className="font-archivo mb-2">
            <div className="flex flex-row gap-1 mt-1 text-[15px]">
                <label className="text-gray-600">Owned by</label>
                <LightBlueGradientText text={
                    ownerId.endsWith(".near")
                        ? ownerId
                        : shortenString(ownerId, 4, 10)
                }/>
            </div>
            <div className="flex flex-row items-center gap-2 text-[15px]">
                <div className="inline-flex gap-1 text-gray-600">
                    Minted on
                    <label className="font-semibold">{mintSiteName || contractId}</label>
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

export default TokenPreviewOwnerContract;