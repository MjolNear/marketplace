import React from 'react';

const NftPreviewTitle = React.memo(({title}) => {
    return (
        <div className="font-extrabold text-mjol-purple-dark text-lg md:text-xl">
            {title}
        </div>
    );
});

export default NftPreviewTitle;