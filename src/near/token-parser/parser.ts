import {Optional} from "../../business-logic/types/aliases";
import {TokenCollectionMetadata} from "../../business-logic/types/nft";


export const parseMjolCollection = (
    extra?: Optional<string>
): Optional<TokenCollectionMetadata> => {
    try {
        const collection = JSON.parse(extra || "")
        if ("collection_id" in collection && "title" in collection) {
            return {
                collectionId: collection['collection_id'],
                name: collection["title"]
            }
        }
    } catch {
        return null
    }
    return null
}