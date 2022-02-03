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
            <StatBox name="floar price" value={floar.toString()} priceValue={true}/>
            <StatBox name="items" value={items.toString()}/>
            <StatBox name="owners" value={owners.toString()}/>
            <StatBox name="volume traded" value={volume.toString()} priceValue={true}/>
        </div>
    );
});

export default Stats;