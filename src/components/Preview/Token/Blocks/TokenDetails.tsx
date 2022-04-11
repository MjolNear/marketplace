import React from 'react';
import {AccountId, ContractId, Optional, TokenId} from "../../../../business-logic/types/aliases";
import KeyValueDisclosure from "../../../Common/Disclosure/KeyValueDisclosure";
import {MdAccountBalanceWallet as MdAcc} from "react-icons/md";
import {TAttribute} from "../Attributes/AttributeProps";

export interface TTokenDetailsProps {
    contractId: ContractId
    ownerId: AccountId
    tokenId: TokenId,
    copies?: Optional<number>
    ipfsReference?: Optional<string>
}

const TokenDetails: React.FC<TTokenDetailsProps> = ({
    contractId,
    ownerId,
    tokenId,
    copies,
    ipfsReference
}) => {
    const attributes: TAttribute[] = [
        {name: "Contract", value: contractId, tooltip: true},
        {name: "Token", value: tokenId, tooltip: true},
        {name: "Owner", value: ownerId, tooltip: true},
        {name: "Copies", value: copies?.toString() || "1", tooltip: true},
        {name: "Reference", value: ipfsReference || "---", tooltip: true}
    ]
    return (
        <KeyValueDisclosure name="Token details"
                            icon={<MdAcc/>}
                            defaultOpen={true}
                            attributes={attributes}
        />
    );
};

export default TokenDetails;