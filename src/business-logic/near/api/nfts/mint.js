import {getAccountId} from "../../enviroment/near";
import {mjolFunctionCall} from "../rpc";

export function mintToCommonCollection(tokenMetadata, payout, collectionId) {
    const args = {
        token_owner_id: getAccountId(),
        token_metadata: tokenMetadata,
    };
    if (payout !== null) {
        args["payout"] = payout
    }
    if (collectionId !== null) {
        args["collection_id"] = collectionId
    }
    return mjolFunctionCall({
            methodName: 'nft_mint',
            args,
        }
    )
}

export function createCollection(metadata) {
    return mjolFunctionCall({
        methodName: 'create_collection',
        args: {
            metadata
        },
    })
}