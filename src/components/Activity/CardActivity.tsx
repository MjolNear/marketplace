import React from 'react';
import CardActivityRow, {TCardActivityRowProps} from "./CardActivityRow";
import {useTokenActivityQuery} from "../../graphql/generated/graphql";
import CardActivityCell, {ActivityCellType} from "./CardActivityCell";
import MjolLoader from "../Common/Loaders/MjolLoader";

interface TCardActivityProps {
    tokenUID: string
    activities: TCardActivityRowProps[]
}

const CardActivity: React.FC<TCardActivityProps> = ({
    tokenUID,
}) => {

    const {data, loading} = useTokenActivityQuery({
        variables: {
            tokenUID
        }
    })

    const activities = data?.tokenActivity || []

    const columns = ["Event", "Price", "From", "To", "Date", "Tx Hash"]

    if (activities.length === 0 || loading) {
        return <div className="w-full py-[16px] text-md text-center font-archivo font-semibold bg-mjol-blue-card-property
                               border-l-[2px] border-r-[2px] border-b-[2px]
                               border-mjol-blue-card-property rounded-b-lg"
        >
            {loading
                ? <MjolLoader size={24}/>
                : <div>No activities found</div>
            }
        </div>
    }

    return (
        <div className="max-h-[325px] overflow-y-scroll w-full
                        border-l-[2px] border-r-[2px] border-b-[2px] border-mjol-blue-card-property rounded-b-lg"
        >
            <div className="w-full flex px-[4px]
                            font-archivo text-sm font-semibold pt-[1px] sticky top-0 z-1 bg-mjol-blue-card-property">
                {columns.map(c =>
                    <CardActivityCell key={c}
                                      type={
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
                <div key={activity.txHash}>
                    <div className="bg-mjol-blue-card-property h-px"/>
                    <div className="px-[4px]">
                        <CardActivityRow event={activity.eventType}
                                         price={activity.price}
                                         from={activity.owner.id}
                                         to={activity.buyer?.id}
                                         timestamp={activity.timestamp}
                                         txHash={activity.txHash}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardActivity;