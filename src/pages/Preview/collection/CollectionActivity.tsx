import React, {useState} from 'react';
import {CollectionId, ContractId} from "../../../@types/Aliases";
import {useCollectionActivity} from "../../../hooks/graphql/activities";
import {ActivityEventType} from "../../../graphql/generated/graphql";
import PaginationActivityList from "../../../components/Activity/PaginationActivityList";
import CollectionActivityList from "../../../components/Activity/CollectionActivityList";
import {activityEvents, ActivitySortName, activitySortOptions} from "../../../graphql/types";
import {ActivitySortFilter} from "../../../components/Filter/popup/sort/SortFilter";
import {ActivityEventPickFilter} from "../../../components/Filter/popup/pick/PickFilter";

interface CollectionActivityProps {
    contractId: ContractId
    collectionId: CollectionId
    collectionName: string
}

const CollectionActivity: React.FC<CollectionActivityProps> = ({
    contractId,
    collectionId,
    collectionName
}) => {

    const LIMIT = 12

    const [filter, setFilter] = useState<ActivitySortName>(ActivitySortName.RecentlyAdded)
    const [events, setEvents] = useState<ActivityEventType[]>([])

    const {data, hasMore, loading, onLoadMore} = useCollectionActivity(
        LIMIT,
        contractId,
        collectionId,
        activitySortOptions[filter].by,
        activitySortOptions[filter].direction,
        events.length === 0 ? activityEvents : events
    )

    return (
        <PaginationActivityList hasMore={hasMore}
                                onLoadMore={onLoadMore}
                                dataLength={data.length}
                                loading={loading}
        >
            <div className="mb-7 inline-flex gap-3">
                <ActivitySortFilter setSort={setFilter} picked={filter} disabled={false}/>
                <ActivityEventPickFilter picked={events} apply={setEvents}/>
            </div>
            <CollectionActivityList activities={data}
                                    collectionId={collectionId}
                                    collectionName={collectionName}
            />
        </PaginationActivityList>
    );
};

export default CollectionActivity;