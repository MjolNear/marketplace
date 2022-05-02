import React from 'react';
import {ActivityEventType} from "../../../graphql/generated/graphql";
import TransferIcon from "../../Icons/Activity/TransferIcon";
import ListingIcon from "../../Icons/Activity/ListingIcon";
import UnlistIcon from "../../Icons/Activity/UnlistIcon";
import BuyIcon from "../../Icons/Activity/BuyIcon";
import BaseActivityCell from "./BaseActivityCell";

interface ActivityEventCellProps {
    event: ActivityEventType
    size?: number
}

const ActivityEventCell: React.FC<ActivityEventCellProps> = ({
    event,
    size = 14
}) => {
    return (
        <BaseActivityCell>
            {event === ActivityEventType.Transferred && <TransferIcon size={size}/>}
            {event === ActivityEventType.List && <ListingIcon size={size}/>}
            {event === ActivityEventType.Unlist && <UnlistIcon size={size}/>}
            {event === ActivityEventType.Buy && <BuyIcon size={size}/>}
            {event.toString()}
        </BaseActivityCell>
    );
};

export default ActivityEventCell;