import React from 'react';
import {shortenString} from "../../../utils/string";
import {Optional} from "../../../business-logic/types/aliases";
import BaseActivityCell from "./BaseActivityCell";

interface ActivityAccountCellProps {
    accountId?: Optional<string>
}

const ActivityAccountCell: React.FC<ActivityAccountCellProps> = ({
    accountId
}) => {
    return (
        <BaseActivityCell>
            {accountId
                ?
                <a href={`https://explorer.near.org/accounts/${accountId}`}
                   className="text-gray-700 hover:text-gray-900"
                   target="_blank"
                   rel="noreferrer"
                >
                    {shortenString(accountId, 6, 13)}
                </a>
                :
                <div className="text-gray-700">
                    ---
                </div>
            }
        </BaseActivityCell>
    );
};

export default ActivityAccountCell;