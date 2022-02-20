import React from 'react';
import CardActivityRow, {CardActivityRowProps} from "./CardActivityRow";
import {useTokenActivityQuery} from "../../graphql/generated/graphql";
import CardActivityCell, {ActivityCellType} from "./CardActivityCell";

interface CardActivityProps {
    tokenUID: string
    activities: CardActivityRowProps[]
}

const CardActivity = React.memo<CardActivityProps>(({
    tokenUID,
}) => {
    const {data, loading, fetchMore} = useTokenActivityQuery({
        variables: {
            tokenUID
        }
    })

    const activities = data?.histories || []

    const columns = ["Event", "Price", "From", "To", "Date", "Tx Hash"]

    return (
        <div className="max-h-[325px] overflow-y-scroll w-full
                        border-l-[1px] border-r-[1px] border-b-[1px] border-mjol-blue-card-property rounded-b-lg"
        >
            <div className="w-full flex px-[4px]
                            font-archivo text-sm font-semibold pt-[1px] sticky top-0 z-1 bg-mjol-blue-card-property">
                {columns.map(c =>
                    <CardActivityCell type={
                        c === "Event"
                            ? ActivityCellType.Event
                            : c === "Price"
                                ? ActivityCellType.Price
                                : ActivityCellType.Basic
                    }>
                        {c}
                    </CardActivityCell>
                )}
            </div>
            {activities.map(activity =>
                <>
                    <div className="bg-mjol-blue-card-property h-px"/>
                    <div className="px-[4px]">
                        <CardActivityRow event={activity.eventType}
                                         price={activity.price}
                                         from={activity.ownerId}
                                         to={activity.buyerId}
                                         timestamp={activity.timestamp}
                                         txHash={activity.txHash}
                        />
                    </div>
                </>
            )}
        </div>
    );
});

export default CardActivity;