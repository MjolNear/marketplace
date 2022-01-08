import React from 'react';
import ContentLoader from "react-content-loader";

const SmallNftLoader = ({width, height, speed = 2.5}) => {

    return (
        <ContentLoader
            speed={speed}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            backgroundColor="#dfe1e2"
            foregroundColor="#f5f5f5"
        >
            <rect x="17" y="128" rx="0" ry="0" width="116" height="15"/>
            <rect x="18" y="152" rx="0" ry="0" width="69" height="25"/>
            <rect x="30" y="191" rx="0" ry="0" width="30" height="23"/>
            <rect x="0" y="0" rx="12" ry="12" width="280" height="280"/>
            <rect x="20" y="286" rx="5" ry="5" width="240" height="20"/>
            <rect x="20" y="318" rx="5" ry="5" width="240" height="15"/>
            <rect x="20" y="362" rx="5" ry="5" width="240" height="20"/>
        </ContentLoader>
    )
};

export default SmallNftLoader;