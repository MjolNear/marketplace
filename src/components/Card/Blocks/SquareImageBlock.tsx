import React, {useState} from 'react';
import {LazyLoadImage, ScrollPosition} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {ObjectFit} from "../../../utils/css-utils";
import {Optional} from "../../../business-logic/models/types";

interface PropTypes {
    path?: Optional<string>,
    objectFit?: ObjectFit,
    className?: string,
    scrollPosition?: ScrollPosition,
    width?: number | string
    height?: number | string
}

const SquareImageBlock: React.FC<PropTypes> = ({
    path,
    objectFit = 'contain',
    scrollPosition = undefined,
    className = undefined,
    width = "100%",
    height = "100%"
}) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className="aspect-w-1 aspect-h-1 justify-center z-10">
            <LazyLoadImage src={path || undefined}
                           className={className}
                           alt="media not supported"
                           effect="opacity"
                           threshold={100}
                           scrollPosition={scrollPosition}
                           afterLoad={() => setLoading(false)}
                           style={{
                               width,
                               height,
                               objectFit,
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

export default SquareImageBlock;