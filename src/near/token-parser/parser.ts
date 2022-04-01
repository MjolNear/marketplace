import {ContractId, Optional} from "../../business-logic/types/aliases";
import {TokenCollectionMetadata} from "../../business-logic/types/nft";
import {MJOL_CONTRACT_ID} from "../enviroment/contract-names";


export const parseCollection = (
    contractId: ContractId,
    metadata?: { extra?: string }
): Optional<TokenCollectionMetadata> | undefined => {
    if (contractId === MJOL_CONTRACT_ID) {
        try {
            const collection = JSON.parse(metadata?.extra || "")
            if ("collection_id" in collection && "title" in collection) {
                return {
                    collectionId: collection['collection_id'],
                    name: collection["title"]
                }
            }
        } catch {
        }
    }
    return
}