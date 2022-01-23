import {AccountId, CollectionId, Optional} from "../../../../models/types";

export interface CollectionMetadata {
    collection_id: CollectionId,
    owner_id: AccountId,
    title: String,
    desc: String,
    media: String,
    reference: Optional<String>,
}