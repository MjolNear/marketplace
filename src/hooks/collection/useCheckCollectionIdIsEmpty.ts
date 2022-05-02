import {CollectionId} from "../../@types/Aliases";
import {useIsCollectionExistsQuery} from "../../graphql/generated/graphql";

export const useCheckCollectionIdIsEmpty = (collectionId: CollectionId) => {

    const {data, loading, error} = useIsCollectionExistsQuery({
        variables: {
            id: collectionId
        }
    })

    const isEmpty = data?.collections.length === 0

    return {isEmpty: isEmpty && !error, loading, error}
}