import React from 'react';
import {CollectionId, ContractId} from "../../../business-logic/models/types";
import {useFetchCollectionData} from "../../../hooks/useFetchCollectionData";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import NotFoundPage from "../../not-found/NotFoundPage";

interface TPreviewCollectionProps {
    contractId: ContractId
    collectionId: CollectionId
    filterTab: "item" | "activity"
}

const PreviewCollectionPage2: React.FC<TPreviewCollectionProps> = ({
    contractId,
    collectionId,
    filterTab
}) => {
    const {collection, supply, fetching} = useFetchCollectionData(contractId, collectionId)

    if (fetching) {
        return <CreateLoader/>
    }

    if (!collection) {
        return <NotFoundPage/>
    }

    return (
        <div>

        </div>
    );
};

export default PreviewCollectionPage2;