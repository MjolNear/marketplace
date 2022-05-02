import React from 'react';
import ContentLoader from "react-content-loader";

interface CircleIconLoaderProps {
    size?: number
}

const CircleIconLoader: React.FC<CircleIconLoaderProps> = ({
    size = 27
}) => {
    return (
        <ContentLoader
            speed={1}
            width={size}
            height={size}
            backgroundColor="#dfe1e2"
            foregroundColor="#f5f5f5"
        >
            <circle cx={size / 2} cy={size / 2} r={size / 2}/>
        </ContentLoader>
    );
};

export default CircleIconLoader;