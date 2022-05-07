import React, {useState} from 'react';
import BlueShadowContainer from "../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../components/Common/Text/DarkBlueTitle";
import {ActivitySortFilter} from "../../components/Filter/popup/sort/SortFilter";
import {ActivityEventPickFilter} from "../../components/Filter/popup/pick/PickFilter";
import PaginationActivityList from "../../components/Activity/PaginationActivityList";
import {activityEvents, ActivitySortName, activitySortOptions} from "../../graphql/types";
import {ActivityEventType} from "../../graphql/generated/graphql";
import {useActivities} from "../../hooks/graphql/activities";
import TokenActivityRow from "../../components/Activity/Common/TokenActivityRow";


const ActivityPage = () => {

    const LIMIT = 12

    const [filter, setFilter] = useState<ActivitySortName>(ActivitySortName.RecentlyAdded)
    const [events, setEvents] = useState<ActivityEventType[]>([])

    const {data, hasMore, loading, onLoadMore} = useActivities(
        LIMIT,
        activitySortOptions[filter].by,
        activitySortOptions[filter].direction,
        events.length === 0 ? activityEvents : events
    )

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col pb-10 px-4 space-y-8 items-center">
                    <DarkBlueTitle title="Explore Activity"/>
                </div>
            </BlueShadowContainer>
            <PaginationActivityList hasMore={hasMore}
                                    onLoadMore={onLoadMore}
                                    dataLength={data.length}
                                    loading={loading}
            >
                <div className="mb-7 inline-flex gap-3">
                    <ActivitySortFilter setSort={setFilter} picked={filter} disabled={false}/>
                    <ActivityEventPickFilter picked={events} apply={setEvents}/>
                </div>
                {data.map(activity => (
                    <TokenActivityRow key={activity.id}
                                      {...activity}
                                      collectionId={activity.collection?.collectionId}
                                      collectionName={activity.collection?.title}
                    />
                ))}
            </PaginationActivityList>
        </div>
    );
};

export default ActivityPage;