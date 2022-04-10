import React from 'react';
import {Optional} from "../../../../business-logic/types/aliases";
import CollectionBannerLoader from "../../../Common/Loaders/CollectionBannerLoader";

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
        <div className="h-[250px] w-full overflow-hidden xs:rounded-2xl relative shadow-mjol-blue">
            {loading
                ? <CollectionBannerLoader/>
                : bannerLink &&
                <img className="object-cover w-full max-h-full"
                     alt="loading..."
                     src={
                         `https://ipfs.io/${bannerLink.replace(":/", "")}`
                     }
                />
            }
        </div>
    );
});

export default CollectionBanner;