import React from 'react';
import ContentLoader from "react-content-loader";

const SmallNftLoader = ({width, height, speed = 1.5}) => {

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
                <rect x="0" y="0" width="280" height="280"/>
                <rect x="20" y="290" rx="5" ry="5" width="240" height="17"/>
                <rect x="20" y="318" rx="5" ry="5" width="240" height="15"/>
                <rect x="20" y="367" rx="5" ry="5" width="240" height="17"/>
            </ContentLoader>
        </div>
    )
};

export default SmallNftLoader;