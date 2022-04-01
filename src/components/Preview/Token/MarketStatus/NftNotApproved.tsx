import React, {useEffect} from 'react';
import {contractAPI} from "../../../../near/api/contracts";
import {ContractId, TokenId} from "../../../../business-logic/types/aliases";

interface TNftNotApprovedProps {
    contractId: ContractId,
    tokenId: TokenId
}

const NftNotApproved: React.FC<TNftNotApprovedProps> = ({
    contractId,
    tokenId
}) => {

    useEffect(() => {
        contractAPI.removeExpiredContract(contractId, tokenId).then()
            .catch(e => console.log(e.toString()))
    }, [contractId, tokenId])

    return (
        <div className="text-center rounded-xl px-6 py-4 bg-mjol-blue-card-property
                        font-bold font-archivo text-md text-gray-700"
        >
            NFT has just been sold or transferred
        </div>
    );
};

export default NftNotApproved;