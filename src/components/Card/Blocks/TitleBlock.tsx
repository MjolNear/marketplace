import React from 'react';

interface PropTypes {
    title: string,
}

const TitleBlock = React.memo<PropTypes>(({title}) => {
    return (
        <div className="font-bold font-archivo text-black truncate text-md">
            {title}
        </div>
    );
});

export default TitleBlock;