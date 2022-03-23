import React, {memo} from 'react';
import {AccountId, ContractId, TokenId} from "../../../../business-logic/models/types";
import KeyValueDisclosure from "../../../Common/Disclosure/KeyValueDisclosure";
import {MdAccountBalanceWallet as MdAcc} from "react-icons/md";
import {TAttribute} from "../Attributes/AttributeProps";

export interface TTokenDetailsProps {
    contractId: ContractId
    ownerId: AccountId
    tokenId: TokenId,
}

const TokenDetails: React.FC<TTokenDetailsProps> = ({
    contractId,
    ownerId,
    tokenId
}) => {
    const attributes: TAttribute[] = [
        {name: "Contract", value: contractId, tooltip: true},
        {name: "Token", value: tokenId, tooltip: true},
        {name: "Owner", value: ownerId, tooltip: true},
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