import React from 'react';

interface PropTypes {
    title: string
}

const CollectionTitle = React.memo<PropTypes>(({title}) => {
    return (
        <div className="font-bold text-mjol-purple-dark truncate text-md">
            {title}
        </div>
    );
});

export default CollectionTitle;