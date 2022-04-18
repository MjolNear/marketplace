import React from 'react';
import ContentLoader from "react-content-loader";

interface ReactLoaderProps {
    className?: string
    width?: number | string
    height?: number | string

}

const RectLoader: React.FC<ReactLoaderProps> = ({
    className,
    width,
    height
}) => {
    return (
        <div className={`overflow-hidden ${className}`} style={{
            width,
            height
        }}>
            <ContentLoader
                speed={2}
                width="100%"
                height="100%"
                backgroundColor="#dfe1e2"
                foregroundColor="#f5f5f5"
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%"/>
            </ContentLoader>
        </div>
    );
};

export default RectLoader;