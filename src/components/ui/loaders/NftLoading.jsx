import React from 'react';
import ContentLoader from "react-content-loader";

const NftLoading = ({width, height, speed = 2}) => {
    return (
        <ContentLoader
            speed={speed}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            foregroundColor='#f0efef'
            backgroundColor='#e1e4ea'
        >
            <rect x='0' y='0' rx='16' ry='16' width={width} height={height} speed={2}/>
        </ContentLoader>
    );
};

export default NftLoading;