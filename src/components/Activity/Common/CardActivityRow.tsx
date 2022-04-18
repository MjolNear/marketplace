import React, {useState} from 'react';
import {Optional} from "../../../business-logic/types/aliases";
import {fromYocto2Near, shortenString} from "../../../utils/string";
import CardActivityCell, {ActivityCellType} from "./CardActivityCell";
import {ActivityEventType} from "../../../graphql/generated/market-graphql";
import ListingIcon from "../../Icons/Activity/ListingIcon";
import NearBlackLogo from "../../Icons/near/NearIcon";
import BuyIcon from "../../Icons/Activity/BuyIcon";
import {getRelativeTimestamp} from "../../../utils/time";
import UnlistIcon from "../../Icons/Activity/UnlistIcon";
import {BsCheck} from "react-icons/bs";
import ActivityAccountCell from "../Cells/ActivityAccountCell";
import CopyIcon from "../../Icons/CopyIcon";
import Tooltip from "../../Layout/Tooltip";
import {copiedToast} from "../../Layout/Toast";
import TransferIcon from "../../Icons/Activity/TransferIcon";

export interface TCardActivityRowProps {
    event: ActivityEventType,
    price?: Optional<string>,
    from: string,
    to?: Optional<string>,
    timestamp: string,
    txHash: string
}

const CardActivityRow: React.FC<TCardActivityRowProps> = ({
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
                {event === ActivityEventType.List && <ListingIcon size={14}/>}
                {event === ActivityEventType.Buy && <BuyIcon size={14}/>}
                {event === ActivityEventType.Unlist && <UnlistIcon size={14}/>}
                {event === ActivityEventType.Transferred && <TransferIcon size={14}/>}
                {event}
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Price}>
                <NearBlackLogo size={12} fill="fill-gray-700"/>
                <div className="text-black font-bold">{fromYocto2Near(price)}</div>
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Basic}>
                <ActivityAccountCell accountId={from}/>
            </CardActivityCell>
            <CardActivityCell type={ActivityCellType.Basic}>
                <ActivityAccountCell accountId={to}/>
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
                    <p data-for={`copyActivityTxTooltip:${txHash}`}
                       data-tip="Copy"
                    >
                        <button onClick={() => {
                            navigator.clipboard.writeText(txHash)
                                .then(() => setIsCopied(true))
                                .then(() => copiedToast("TX hash copied successfully"))
                                .then(() => setTimeout(() => setIsCopied(false), 1000))
                        }}>
                            <CopyIcon size={15}/>
                        </button>
                        <Tooltip id={`copyActivityTxTooltip:${txHash}`} place="right"/>
                    </p>
                }
            </CardActivityCell>
        </div>
    );
};

export default CardActivityRow;