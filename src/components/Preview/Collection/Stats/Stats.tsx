import React from 'react';
import StatBox from "./StatBox";

interface PropTypes {
    floar: string,
    items: string,
    owners: string,
    volume: string
}

const Stats = React.memo<PropTypes>(({floar, items, owners, volume}) => {
    return (
        <div className="flex flex-wrap rounded-2xl overflow-hidden
                        ring-[1px] ring-blue-200 mx-2 shadow-mjol-blue-all-xs"
        >
            <StatBox name="floar price" value={floar} priceValue={true}/>
            <StatBox name="items" value={items}/>
            <StatBox name="owners" value={owners}/>
            <StatBox name="volume traded" value={volume} priceValue={true}/>
        </div>
    );
});

export default Stats;