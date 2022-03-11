import React from 'react';
import {ScrollPosition} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {ObjectFit} from "../../../utils/css-utils";
import {Optional} from "../../../business-logic/models/types";
import {Img} from 'react-image';

import brokenImage from './../../../resources/broken-image.png'

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
    className = undefined,
    width = "100%",
    height = "100%"
}) => {
    return (
        <div className="aspect-w-1 aspect-h-1 justify-center z-10">
            <Img src={path || ''}
                 className={className}
                 loader={
                     <div className="flex items-center justify-center">
                         <MjolLoader/>
                     </div>
                 }
                 unloader={
                     <div className="flex items-center justify-center">
                         <img src={brokenImage} alt="not found" className="object-contain w-[100px]"/>
                     </div>
                 }
                 style={{
                     width,
                     height,
                     objectFit
                 }}
            />
        </div>
    );
};

export default SquareImageBlock;