import React, {useState} from 'react';
import {Optional} from "../../business-logic/models/types";
import {fromYocto2Near, shortenString} from "../../utils/string";
import CardActivityCell, {ActivityCellType} from "./CardActivityCell";
import {HistoryEventType} from "../../graphql/generated/graphql";
import ListingIcon from "../Icons/Activity/ListingIcon";
import NearBlackLogo from "../Icons/near/NearBlackLogo";
import BuyIcon from "../Icons/Activity/BuyIcon";
import {getRelativeTimestamp} from "../../utils/time";
import UnlistIcon from "../Icons/Activity/UnlistIcon";
import CopyIcon from "../Icons/Common/CopyIcon";
import {BsCheck} from "react-icons/bs";

export interface CardActivityRowProps {
    event: HistoryEventType,
    price?: Optional<string>,
    from: string,
    to?: Optional<string>,
    timestamp: string,
    txHash: string
}

const CardActivityRow = React.memo<CardActivityRowProps>(({
    event,
    price,
    from,
    to,
    timestamp,
    txHash
}) => {

    const [isCopied, setIsCopied] = useState(false)

    return (
        <div className="w-full inline-flex
                        font-archivo text-gray-700 text-sm font-semibold"
        >
            <CardActivityCell type={ActivityCellType.Event}>
                {event === HistoryEventType.List && <ListingIcon size={14}/>}
                {event === HistoryEventType.Buy && <BuyIcon size={14}/>}
                {event === HistoryEventType.Unlist && <UnlistIcon size={14}/>}
                {event}
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Price}>
                <NearBlackLogo size={12} fill="fill-gray-700"/>
                <div className="text-black font-bold">{fromYocto2Near(price)}</div>
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Basic}>
                <a href={`https://explorer.near.org/accounts/${from}`}
                   className="hover:underline text-blue-600 font-bold"
                   target="_blank"
                   rel="noreferrer"
                >
                    {shortenString(from, 10, 25)}
                </a>
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Basic}>
                {to
                    ?
                    <a href={`https://explorer.near.org/accounts/${to}`}
                       className="hover:underline text-blue-600 font-bold"
                       target="_blank"
                       rel="noreferrer"
                    >
                        {shortenString(to, 10, 25)}
                    </a>
                    : "---"
                }
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Basic}>
                {getRelativeTimestamp(timestamp)}
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Basic}>
                {shortenString(txHash, 7)}
                {isCopied
                    ?
                    <BsCheck size={18}/>
                    :
                    <button onClick={() => {
                        navigator.clipboard.writeText(txHash).then()
                        setIsCopied(true)
                        setTimeout(() => setIsCopied(false), 1000)
                    }}>
                        <CopyIcon size={15}/>
                    </button>
                }
            </CardActivityCell>
        </div>
    );
});

export default CardActivityRow;