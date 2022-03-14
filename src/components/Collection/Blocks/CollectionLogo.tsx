import CardImage from "../../Card/Blocks/CardImage";
import React from "react";

interface PropTypes {
    hasBanner: boolean,
    logoLink: string
}

const CollectionLogo = React.memo<PropTypes>(({logoLink, hasBanner}) => {
    return <div
        className={"w-[120px] h-[120px] relative " + (hasBanner ? "-mt-[64px]" : "")}>
        <CardImage url={logoLink} className="rounded-full ring-8 ring-white "/>
    </div>;
})

export default CollectionLogo