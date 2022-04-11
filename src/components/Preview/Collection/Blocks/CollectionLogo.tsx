import CardImage from "../../../Card/Blocks/CardImage";
import React from "react";
import CollectionBannerLoader from "../../../Common/Loaders/CollectionBannerLoader";

interface TCollectionLogoProps {
    hasBanner: boolean,
    logoLink: string
}

const CollectionLogo: React.FC<TCollectionLogoProps> = ({logoLink, hasBanner}) => {
    return (
        <div className={hasBanner ? "w-[130px] h-[130px] relative -mt-[70px]" : "w-[250px] h-[250px]"}>
            <CardImage url={logoLink}
                       className="ring-[12px] ring-white rounded-2xl bg-white w-full"
                       objectFit="cover"
                       loader={<CollectionBannerLoader/>}
            />
        </div>
    );
}

export default CollectionLogo