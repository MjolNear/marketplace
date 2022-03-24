import React from 'react';
import IconDisclosureButton from "../../../Common/Disclosure/IconDisclosureButton";
import {GiBuyCard} from "react-icons/gi";
import CardActivity from "../../../Activity/CardActivity";
import {ContractId, TokenId} from "../../../../business-logic/models/types";
import {buildUID} from "../../../../business-logic/near/api/utils";

interface TTokenActivityProps {
    contractId: ContractId
    tokenId: TokenId
}

const TokenActivity: React.FC<TTokenActivityProps> = ({
    contractId,
    tokenId
}) => {
    const uid = buildUID(contractId, tokenId)
    return (
        <IconDisclosureButton icon={<GiBuyCard/>}
                              name="Activity"
        >
            <CardActivity tokenUID={uid} activities={[]}/>
        </IconDisclosureButton>
    );
};

export default TokenActivity;