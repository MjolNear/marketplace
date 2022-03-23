import React from 'react';
import {AccountId, ContractId} from "../../../../business-logic/models/types";
import {Link} from "react-router-dom";
import {whitelistedCollections} from "../../../../business-logic/whitelisted.collections";
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";
import ResolveVerificationIcon from "../../../Common/Verification/Icons/ResolveVerificationIcon";
import {ContractVerificationStatus} from "../../../../business-logic/models/contract";
import Tooltip, {getContractVerificationTooltipContent} from '../../../Layout/Tooltip';
import {shortenString} from "../../../../utils/string";


interface TNftPreviewTitleProps {
    title: string,
    ownerId: AccountId,
    contractId: ContractId,
    mintSiteName?: string
    verification?: ContractVerificationStatus
}

const TokenTitleAndOwner: React.FC<TNftPreviewTitleProps> = ({
    title,
    ownerId,
    contractId,
    mintSiteName,
    verification
}) => {
    const collection = whitelistedCollections[contractId]
    return (
        <>
            <div className="font-archivo mb-5">
                <div className="font-black text-2xl">
                    {title}
                </div>
                {collection &&
                    <Link to={`/collections/${contractId}/${collection.collectionId}/items`}
                          className="font-bold text-gray-600 text-xs-3 hover:text-gray-900"
                    >
                        {collection.name}
                    </Link>
                }
                <div className="flex flex-row gap-1 mt-5 text-[15px]">
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
            </div>
        </>
    )
};

export default TokenTitleAndOwner;