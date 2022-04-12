import React from 'react';
import {Optional} from "../../../../business-logic/types/aliases";
import CollectionBannerLoader from "../../../Common/Loaders/CollectionBannerLoader";
import {Img} from "react-image";

interface PropTypes {
    loading: boolean
    bannerLink?: Optional<string>
}

const CollectionBanner = React.memo<PropTypes>(({
    loading,
    bannerLink
}) => {

    if (!loading && !bannerLink) return null

    return (
        <div className="h-[250px] w-full overflow-hidden xs:rounded-2xl relative ring-1 ring-gray-300">
            {loading
                ? <CollectionBannerLoader/>
                : bannerLink &&
                <Img className="object-cover w-full h-full"
                     alt="loading..."
                     src={
                         `https://ipfs.io/${bannerLink.replace(":/", "")}`
                     }
                     loader={<CollectionBannerLoader/>}
                />
            }
        </div>
    );
});

export default CollectionBanner;