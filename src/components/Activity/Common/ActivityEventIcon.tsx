import React from 'react';
import {ActivityEventType} from "../../../graphql/generated/graphql";
import {IconProps} from "../../Icons/IconProps";
import TransferIcon from "../../Icons/Activity/TransferIcon";
import ListingIcon from "../../Icons/Activity/ListingIcon";
import UnlistIcon from "../../Icons/Activity/UnlistIcon";
import BuyIcon from "../../Icons/Activity/BuyIcon";
import {IoMdSwap} from "react-icons/io";

interface ActivityEventIconProps {
    event: ActivityEventType
}

const ActivityEventIcon: React.FC<ActivityEventIconProps & IconProps> = ({
    event,
    size,
    fill
}) => {
    return (
        <>
            {event === ActivityEventType.Transferred && <TransferIcon size={size} fill={fill}/>}
            {event === ActivityEventType.List && <ListingIcon size={size} fill={fill}/>}
            {event === ActivityEventType.Unlist && <UnlistIcon size={size} fill={fill}/>}
            {event === ActivityEventType.Buy && <BuyIcon size={size} fill={fill}/>}
            {event === ActivityEventType.UpdatePrice && <IoMdSwap size={size} className={fill}/>}
        </>
    );
};

export default ActivityEventIcon;