import React from 'react';
import ContentLoader from "react-content-loader";

const CollectionBannerLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            backgroundColor="#dfe1e2"
            foregroundColor="#f5f5f5"
        >
            <rect x="0" y="0" rx="12" ry="12" width="100%" height="100%"/>
        </ContentLoader>
    );
};

export default CollectionBannerLoader;