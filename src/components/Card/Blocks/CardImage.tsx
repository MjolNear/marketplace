import React from 'react';
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {ObjectFit} from "../../../utils/css-utils";
import {Optional} from "../../../business-logic/types/aliases";
import {Img} from 'react-image';

import brokenImage from './../../../resources/broken-image.png'

interface TCardImageProps {
    url?: Optional<string>,
    objectFit?: ObjectFit,
    className?: string,
    width?: number | string
    height?: number | string
    loader?: JSX.Element | null
}

const CardImage: React.FC<TCardImageProps> = ({
    url,
    objectFit = 'contain',
    className = undefined,
    width = "100%",
    height = "100%",
    loader = <MjolLoader/>
}) => {
    const media = url?.replace(' ', '%20').replace('#', '%23')
    return (
        <div className="aspect-w-1 aspect-h-1 justify-center z-10">
            <Img src={media || ''}
                 className={className}
                 loader={loader}
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

export default CardImage;