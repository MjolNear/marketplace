import React, {memo} from 'react';
import {Optional} from "../../../business-logic/models/types";
import {Img} from "react-image";
import MjolLoader from "../../Common/Loaders/MjolLoader";
import brokenImage from "../../../resources/broken-image.png";

interface TImageProps {
    link?: Optional<string>,
}

const PreviewNftImage: React.FC<TImageProps> = ({link}) => {
    return (
        <Img src={'' || ''}
             className="object-contain w-full max-h-[600px] max-w-[600px]"
             loader={
                 <div className="">
                     <MjolLoader/>
                 </div>
             }
             unloader={
                 <div className="w-full h-full">
                     <img src={brokenImage} alt="not found" className="w-[100px]"/>
                 </div>
             }
        />
    );
};

export default memo(PreviewNftImage);