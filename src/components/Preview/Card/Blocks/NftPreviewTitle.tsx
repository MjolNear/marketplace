import React from 'react';

interface PropTypes {
    title: string
}

const NftPreviewTitle = React.memo<PropTypes>(({title}) => {
    return (
        <div className="font-extrabold font-archivo text-black text-lg md:text-xl">
            {title}
        </div>
    );
});

export default NftPreviewTitle;