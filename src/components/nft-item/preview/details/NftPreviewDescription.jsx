import React from 'react';

const NftPreviewDescription = React.memo(({text}) => {
    return (
        <div className="px-4 py-2 rounded-lg w-full
                        text-gray-900 font-light
                        text-md md:text-lg
                        bg-blue-100
                        ">
            {text ? text : "Not found"}
        </div>
    );
});

export default NftPreviewDescription;