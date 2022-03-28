import React, {useState} from 'react';
import {useParams} from "react-router";
import NotFound404Page from "../../NotFound404";
import PreviewCollectionPage from "./PreviewCollectionPage";

type CollectionRouteParams = {
    contractId: string,
    collectionId: string,
    filterTab: "items" | "activity"
}

const PreviewCollectionMatchRouterParams = () => {
    const {contractId, collectionId, filterTab} = useParams<CollectionRouteParams>()

    if (!collectionId || !contractId || !filterTab) {
        return <NotFound404Page/>
    }

    return <PreviewCollectionPage contractId={contractId}
                                  collectionId={collectionId}
                                  filterTab={filterTab}
    />
};

export default PreviewCollectionMatchRouterParams;