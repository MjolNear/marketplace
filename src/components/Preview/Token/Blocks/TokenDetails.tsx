import React from 'react';
import {AccountId, ContractId, Optional, TokenId} from "../../../../business-logic/models/types";
import KeyValueDisclosure from "../../../Common/Disclosure/KeyValueDisclosure";
import {MdAccountBalanceWallet as MdAcc} from "react-icons/md";
import {TAttribute} from "../Attributes/AttributeProps";

export interface TTokenDetailsProps {
    contractId: ContractId
    ownerId: AccountId
    tokenId: TokenId,
    copies?: Optional<number>
}

const TokenDetails: React.FC<TTokenDetailsProps> = ({
    contractId,
    ownerId,
    tokenId,
    copies
}) => {
    const attributes: TAttribute[] = [
        {name: "Contract", value: contractId, tooltip: true},
        {name: "Token", value: tokenId, tooltip: true},
        {name: "Owner", value: ownerId, tooltip: true},
        {name: "Copies", value: copies?.toString() || "1", tooltip: true}
    ]

    // if (copies) {
    //     attributes.push({name: "Copies", value: copies.toString(), tooltip: true})
    // }

    return (
        <KeyValueDisclosure name="Token details"
                            icon={<MdAcc/>}
                            defaultOpen={true}
                            attributes={attributes}
        />
    );
};

export default TokenDetails;