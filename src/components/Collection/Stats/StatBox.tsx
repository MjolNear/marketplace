import React from 'react';

interface PropTypes {
    name: string,
    value: string
}

const StatBox = React.memo<PropTypes>(({name, value}) => {
    return (
        <div className="flex grow flex-col ring-blue-300 ring-[0.5px] px-8 py-2 items-center">
            <div className="font-archivo font-medium opacity-90 text-sm">{name}</div>
            <div className="font-archivo font-extrabold text-xl">{value}</div>
        </div>
    );
});

export default StatBox;