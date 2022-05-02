import React from 'react';
import ActivityRowLoader from "./ActivityRowLoader";

interface ActivityListLoaderProps {
    length: number
}

const ActivityListLoader: React.FC<ActivityListLoaderProps> = ({
    length
}) => {
    return (
        <>
            {new Array(length).fill(0).map((_, i) => <ActivityRowLoader key={i}/>)}
        </>
    );
};

export default ActivityListLoader;