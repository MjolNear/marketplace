import React from 'react';
import {Optional} from "../../../business-logic/models/types";
import {Img} from "react-image";
import MjolLoader from "../../Common/Loaders/MjolLoader";
import brokenImage from "../../../resources/broken-image.png";

interface PropTypes {
    link?: Optional<string>,
    imageName: string
}

const PreviewNftImage = React.memo<PropTypes>(({link, imageName}) => {
    return (
        <Img src={link || ''}
             className="object-contain w-full max-h-[600px] max-w-[600px]"
             loader={
                 <div className="flex items-center justify-center">
                     <MjolLoader/>
                 </div>
             }
             unloader={
                 <div className="flex items-center justify-center w-full max-h-[600px] max-w-[600px]">
                     <img src={brokenImage} alt="not found" className="w-[100px]"/>
                 </div>
             }
        />
    );
});

export default PreviewNftImage;