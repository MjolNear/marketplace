import React, {memo} from 'react';
import {Optional} from "../../../../@types/Aliases";
import {Img} from "react-image";
import MjolLoader from "../../../../@ui/Loaders/MjolLoader";
import brokenImage from "../../../../resources/broken-image.png";

interface TImageProps {
    url?: Optional<string>,
}

const TokenMedia: React.FC<TImageProps> = ({
    url
}) => {
    const media = url?.replace(' ', '%20').replace('#', '%23')
    return (
        <div className="flex flex-col ring-[1px] ring-blue-100 rounded-2xl overflow-hidden">
            <div>
                <Img src={media || ''}
                     className="object-contain w-full"
                     loader={
                         <div className="py-32 lg:px-20 lg:py-52">
                             <MjolLoader size={50}/>
                         </div>
                     }
                     unloader={
                         <div className="w-full py-16 lg:py-28 flex items-center justify-center">
                             <img src={brokenImage} alt="not found" className="w-[100px]"/>
                         </div>
                     }
                />
            </div>
        </div>
    );
};

export default memo(TokenMedia);