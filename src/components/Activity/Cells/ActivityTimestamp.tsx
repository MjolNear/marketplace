import React from 'react';
import {dateFromUNIX, getRelativeTimestamp} from "../../../utils/time";
import BaseActivityCell from "./BaseActivityCell";
import Tooltip from "../../Layout/Tooltip";
import moment from "moment/moment";

interface ActivityTimestampCellProps {
    timestamp: string
    txHash: string
    blockHash: string
}

const ActivityTimestampCell: React.FC<ActivityTimestampCellProps> = ({
    timestamp,
    txHash,
    blockHash
}) => {
    return (
        <BaseActivityCell>
            <div className="text-sm text-gray-700 cursor-pointer"
                 data-tip={moment(dateFromUNIX(timestamp)).format("LLL")}
                 data-for={`tokenActivityTimestamp-${timestamp}`}
            >
                {getRelativeTimestamp(timestamp)}
                <Tooltip id={`tokenActivityTimestamp-${timestamp}`} place="top"/>
            </div>
        </BaseActivityCell>
    );
};

export default ActivityTimestampCell;