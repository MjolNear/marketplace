import React from 'react';
import ContentLoader from "react-content-loader";

const SmallNftLoader = React.memo(({width, height, speed = 1.5}) => {
    return (
        <div className="rounded-xl ring-1 ring-gray-200 overflow-hidden">
            <ContentLoader
                speed={speed}
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                backgroundColor="#dfe1e2"
                foregroundColor="#f5f5f5"
            >
                <rect x="0" y="0" width={width} height={width}/>
                <rect x="20" y="310" rx="5" ry="5" width={width - 40} height="17"/>
                <rect x="20" y="333" rx="5" ry="5" width={width - 40} height="15"/>
                <rect x="20" y="392" rx="5" ry="5" width={width - 40} height="17"/>
            </ContentLoader>
        </div>
    )
});

export default SmallNftLoader;