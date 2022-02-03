import React from 'react';

interface PropTypes {
    title: string
    description: string,
}

const CollectionTitleDescription = React.memo<PropTypes>(({title, description}) => {
    return (
        <div className="flex flex-col text-center items-center my-2 space-y-3 px-2">
            <div className="font-archivo font-black text-5xl">{title}</div>
            <div className="font-archivo font-bold text-xl opacity-80">{description}</div>
        </div>
    );
});

export default CollectionTitleDescription;