import React from 'react';
import {shortenString} from "../../utils/string";
import {Optional} from "../../business-logic/models/types";

interface AccountHrefCellProps {
    accountId?: Optional<string>
}

const AccountHrefCell = React.memo<AccountHrefCellProps>(({
    accountId,
}) => {
    return (
        <> {
            accountId
                ?
                <a href={`https://explorer.near.org/accounts/${accountId}`}
                   className="hover:text-blue-600 text-blue-500 font-semibold"
                   target="_blank"
                   rel="noreferrer"
                >
                    {shortenString(accountId, 8, 16)}
                </a>
                : "---"
        }
        </>
    );
});

export default AccountHrefCell;