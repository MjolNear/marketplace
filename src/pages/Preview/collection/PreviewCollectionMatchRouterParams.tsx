import React from 'react';
import {useParams} from "react-router";
import NotFound404Page from "../../NotFound404";
import PreviewCollectionPage from "./PreviewCollectionPage";
import {useSearchParams} from "react-router-dom";

type CollectionRouteParams = {
    collectionId: string
}

const PreviewCollectionMatchRouterParams = () => {
    const {collectionId} = useParams<CollectionRouteParams>()
    const [searchParams] = useSearchParams();

    const tab = searchParams.get("tab")

    if (!collectionId || !!tab && tab !== "activity") {
        return <NotFound404Page/>
    }

    return <PreviewCollectionPage collectionId={collectionId}
                                  filterTab={
                                      tab === "activity"
                                          ? "activity"
                                          : "items"
                                  }
    />
};

export default PreviewCollectionMatchRouterParams;