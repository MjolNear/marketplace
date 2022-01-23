import React from 'react';

interface PropTypes {
    text: string
}

const NftPreviewDescription = React.memo<PropTypes>(({text}) => {
    return (
        <div className="px-4 py-2 rounded-lg w-full
                        text-gray-900 font-light
                        text-md md:text-lg
                        bg-blue-100"
        >
            {text ? text : "Not found"}
        </div>
    );
});

export default NftPreviewDescription;