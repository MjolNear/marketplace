import React from 'react';

interface PropTypes {
    floar: number,
    listed: number,
    owners: number,
    volume: number
}

const Stats = React.memo<PropTypes>(({floar, listed, owners, volume}) => {
    return (
        <div className="rounded-2xl grid-cols-2 grid-rows-2">
            <div>Floar: {floar}</div>
            <div>Listed: {listed}</div>
            <div>Owners: {owners}</div>
            <div>Volume: {volume}</div>
        </div>
    );
});

export default Stats;