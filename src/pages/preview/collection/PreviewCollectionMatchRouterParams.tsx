import React from 'react';
import {useParams} from "react-router";
import NotFound404Page from "../../NotFound404";
import PreviewCollectionPage from "./PreviewCollectionPage";

type CollectionRouteParams = {
    collectionId: string,
    filterTab: "items" | "activity"
}

const PreviewCollectionMatchRouterParams = () => {
    const {collectionId, filterTab} = useParams<CollectionRouteParams>()

    if (!collectionId || !filterTab) {
        return <NotFound404Page/>
    }

    return <PreviewCollectionPage collectionId={collectionId} filterTab={filterTab}/>
};

export default PreviewCollectionMatchRouterParams;