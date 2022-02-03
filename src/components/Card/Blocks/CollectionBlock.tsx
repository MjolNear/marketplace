import React from 'react';
interface PropTypes {
    name: string,
}

const CollectionBlock = React.memo<PropTypes>(({name}) => {
    return (
        <div className="text-xs-2 font-semibold font-archivo truncate text-black opacity-75 hover:opacity-90">
            {name}
        </div>
    );
});

export default CollectionBlock;