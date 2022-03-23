import CardImage from "../../../Card/Blocks/CardImage";
import React from "react";

interface TCollectionLogoProps {
    hasBanner: boolean,
    logoLink: string
}

const CollectionLogo: React.FC<TCollectionLogoProps> = ({logoLink, hasBanner}) => {
    return <div
        className={"w-[120px] h-[120px] relative " + (hasBanner ? "-mt-[64px]" : "")}>
        <CardImage url={logoLink} className="ring-8 ring-white rounded-full"/>
    </div>;
}

export default CollectionLogo