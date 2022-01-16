import React, {useState} from 'react';
import {LazyLoadImage, ScrollPosition} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import MjolLoader from "../../Common/loaders/MjolLoader";

interface PropTypes {
    path: string,
    scrollPosition?: ScrollPosition
}

const ImageBlock: React.FC<PropTypes> = ({path, scrollPosition}) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className="aspect-w-1 aspect-h-1 justify-center">
            <LazyLoadImage src={path}
                           alt="media not supported"
                           effect="opacity"
                           threshold={100}
                           scrollPosition={scrollPosition}
                           afterLoad={() => setLoading(false)}
                           style={{
                               width: "100%",
                               height: "100%",
                               objectFit: "contain",
                           }}
            />
            {loading &&
                <div className="flex items-center justify-center">
                    <MjolLoader/>
                </div>
            }
        </div>
    );
};

export default ImageBlock;