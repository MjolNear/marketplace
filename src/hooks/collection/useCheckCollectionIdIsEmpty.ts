import {CollectionId} from "../../@types/Aliases";
import {useIsCollectionExistsQuery} from "../../graphql/generated/collections-graphql";

export const useCheckCollectionIdIsEmpty = (collectionId: CollectionId) => {

    const {data, loading, error} = useIsCollectionExistsQuery({
        variables: {
            id: collectionId
        }
    })

    return {isEmpty: !data?.collection?.id && !error, loading, error}
}