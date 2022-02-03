import React from 'react';
import StatBox from "./StatBox";

interface PropTypes {
    floar: number,
    items: number,
    owners: number,
    volume: number
}

const Stats = React.memo<PropTypes>(({floar, items, owners, volume}) => {
    return (
        <div className="flex flex-row flex-wrap rounded-2xl overflow-hidden ring-[1px] ring-blue-300 mx-2"
        >
            <StatBox name="Floar" value={floar.toString()}/>
            <StatBox name="Items" value={items.toString()}/>
            <StatBox name="Owners" value={owners.toString()}/>
            <StatBox name="Volume" value={volume.toString()}/>
        </div>
    );
});

export default Stats;