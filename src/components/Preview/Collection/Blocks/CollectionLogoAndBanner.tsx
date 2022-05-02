import React from 'react';
import {Optional} from "../../../../@types/Aliases";
import {Img} from "react-image";
import CardImage from "../../../Card/Blocks/CardImage";
import RectLoader from "../../../../@ui/Loaders/RectLoader";

interface PropTypes {
    loading: boolean
    logoLink: string
    bannerLink?: Optional<string>
}

const CollectionLogoAndBanner = React.memo<PropTypes>(({
    loading,
    logoLink,
    bannerLink
}) => {
    return (
        <div className={"w-full relative " + (!!bannerLink || loading ? "h-[250px]" : "h-12")}>
            {bannerLink &&
                <Img className="object-cover w-full h-full 1200px:rounded-lg"
                     alt="loading..."
                     src={`https://ipfs.io/${bannerLink.replace(":/", "")}`}
                     loader={<RectLoader className="rounded-lg"/>}
                />
            }
            <div className={"ring-[6px] ring-white rounded-2xl w-[150px] h-[150px] absolute " +
                "left-[calc(50%-75px)] lg:left-8 " + (bannerLink ? "-bottom-12" : "")}
            >
                <CardImage url={logoLink}
                           className="w-full rounded-2xl"
                           objectFit="cover"
                           loader={<RectLoader className="rounded-2xl"/>}
                />
            </div>
        </div>
    );
});

export default CollectionLogoAndBanner;