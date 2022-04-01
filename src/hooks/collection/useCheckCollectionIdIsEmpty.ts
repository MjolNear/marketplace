import {CollectionId} from "../../business-logic/types/aliases";
import {useLoadCollectionByIdQuery} from "../../graphql/generated/collections-graphql";

export const useCheckCollectionIdIsEmpty = (collectionId: CollectionId) => {

    const {data, loading, error} = useLoadCollectionByIdQuery({
        variables: {
            id: collectionId
        }
    })

    return {isEmpty: !data?.collection?.id && !error, loading}
}