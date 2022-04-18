import React, {memo} from 'react';
import IconDisclosureButton from "../../../Common/Disclosure/IconDisclosureButton";
import {GiBuyCard} from "react-icons/gi";
import {ContractId, TokenId} from "../../../../business-logic/types/aliases";
import {buildUID} from "../../../../near/api/utils";
import TokenActivity from "../../../Activity/TokenActivity";

interface TTokenActivityProps {
    contractId: ContractId
    tokenId: TokenId
}

const TokenActivityDisclosure: React.FC<TTokenActivityProps> = ({
    contractId,
    tokenId
}) => {
    const uid = buildUID(contractId, tokenId)
    return (
        <IconDisclosureButton icon={<GiBuyCard/>}
                              name="Activity"
        >
            <TokenActivity tokenUID={uid}/>
        </IconDisclosureButton>
    );
};

export default memo(TokenActivityDisclosure);