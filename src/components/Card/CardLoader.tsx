import React from 'react';
import ContentLoader from "react-content-loader";

const CardLoader = React.memo(() => {
    return (
        <div className="rounded-xl ring-1 ring-gray-200 overflow-hidden">
            <ContentLoader
                speed={2}
                width="100%"
                height="100%"
                viewBox="0 0 300 420"
                backgroundColor="#dfe1e2"
                foregroundColor="#f5f5f5"
            >
                <rect x="0" y="0" width="300" height="300"/>
                <rect x="20" y="310" rx="5" ry="5" width="260" height="17"/>
                <rect x="20" y="333" rx="5" ry="5" width="260" height="15"/>
                <rect x="20" y="392" rx="5" ry="5" width="260" height="17"/>
            </ContentLoader>
        </div>
    )
});

export default CardLoader;