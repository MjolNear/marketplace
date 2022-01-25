import {NftAPI} from "../../get-utils";


export async function getTraitsFromCollectionsLinks(collections) {
    let res = {}
    for (let collection of collections) {
        const response = await NftAPI.getJsonByURL(collection.reference)
        if (response.error || response.traits === null){
            res[collection.collection_id] = {}
        } else {
            res[collection.collection_id] = response.traits
        }
    }
    return res
}
