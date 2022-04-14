import CardImage from "../../../Card/Blocks/CardImage";
import React from "react";
import CollectionBannerLoader from "../../../Common/Loaders/CollectionBannerLoader";

interface TCollectionLogoProps {
    hasBanner: boolean,
    logoLink: string
}

const CollectionLogo: React.FC<TCollectionLogoProps> = ({logoLink, hasBanner}) => {
    return (
        <div className={
            "ring-[6px] ring-white rounded-2xl bg-white " +
            (hasBanner ? "w-[130px] h-[130px] relative -mt-[70px]" : "w-[250px] h-[250px]")
        }>
            <CardImage url={logoLink}
                       className="w-full rounded-2xl"
                       objectFit="cover"
                       loader={<CollectionBannerLoader/>}
            />
        </div>
    );
}

export default CollectionLogo