import React from 'react';
import {shortenString} from "../../../utils/string";
import {Optional} from "../../../business-logic/types/aliases";
import BaseActivityCell from "./BaseActivityCell";

interface ActivityAccountCellProps {
    accountId?: Optional<string>
    description: string
}

const ActivityAccountCell: React.FC<ActivityAccountCellProps> = ({
    accountId,
    description
}) => {
    return (
        <BaseActivityCell>
            <div className="flex flex-col items-left gap-1">
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
                <div className="text-[9px] md:text-[11px] text-gray-600">
                    {description}
                </div>
            </div>
        </BaseActivityCell>
    );
};

export default ActivityAccountCell;