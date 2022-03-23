import React from 'react';
import {ContractId, AccountId} from "../../../../business-logic/models/types";
import {Link} from "react-router-dom";
import {whitelistedCollections} from "../../../../business-logic/whitelisted.collections";
import VerifiedIcon from "../../../Common/Verification/Icons/VerifiedIcon";
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";


interface TNftPreviewTitleProps {
    title: string,
    ownerId: AccountId,
    contractId: ContractId
}

const TokenTitleAndOwner: React.FC<TNftPreviewTitleProps> = ({
    title,
    ownerId,
    contractId
}) => {
    const collection = whitelistedCollections[contractId]
    return (
        <>
            <div className="font-archivo mb-5">
                <div className="font-black text-2xl">
                    {title}
                </div>
                {collection &&
                    <div className="flex flex-row items-center gap-2 w-fit mb-4">
                        <Link to={`/collections/${contractId}/${collection.collectionId}/items`}>
                            <div className="font-bold text-gray-600 text-xs-3 hover:text-gray-900">
                                {collection.name}
                            </div>
                        </Link>
                        <VerifiedIcon/>
                    </div>
                }
                <div className="text-md inline-flex gap-1 text-[15px] font-thin">
                    <label className="text-gray-700">Owned by</label>
                    <LightBlueGradientText text={ownerId} fontWeight="medium"/>
                </div>
            </div>
        </>
    )
};

export default TokenTitleAndOwner;