import React, {useState} from 'react';
import {useParams} from "react-router";
import NotFoundPage from "../../not-found/NotFoundPage";

type CollectionRouteParams = {
    contractId: string,
    collectionId: string,
    filterTab: "items" | "activity"
}

const PreviewCollectionMatchRouterParams = () => {

    const [marketToggleState, setMarketToggleState] = useState<"init" | "only-market" | "all">("init");
    const {contractId, collectionId, filterTab} = useParams<CollectionRouteParams>()

    if (!contractId || !collectionId || !filterTab) {
        return <NotFoundPage/>
    }

    return (
        <div>

        </div>
    );
};

export default PreviewCollectionMatchRouterParams;