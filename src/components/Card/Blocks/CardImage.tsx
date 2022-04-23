import React, {useReducer} from 'react';
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {ObjectFit} from "../../../utils/css-utils";
import {Optional} from "../../../@types/Aliases";
import {Img, useImage} from 'react-image';
import LightBlueGradientText from "../../Common/Text/LightBlueGradientText";
import {IoMdRefresh} from "react-icons/io";

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
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const media = url?.replace(' ', '%20').replace('#', '%23')
    return (
        <div className="aspect-w-1 aspect-h-1 justify-center z-10">
            <Img src={media || ''}
                 className={className}
                 loader={loader}
                 unloader={
                     <div className="flex items-center justify-center">
                         {/*<img src={brokenImage} alt="not found" className="object-contain w-[100px]"/>*/}
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