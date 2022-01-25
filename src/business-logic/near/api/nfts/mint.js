import {GAS, SM_DEPOSIT} from "../../constants";
import {getAccountId} from "../../enviroment/near";
import {functionCall} from "../rpc";

export function mintToCommonCollection(tokenMetadata, payout, collectionId) {
    const commonContactId = 'mjol.near';

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
    return functionCall({
        contractId: commonContactId,
        methodName: 'nft_mint',
        args,
        gas: GAS,
        attachedDeposit: SM_DEPOSIT
    })
}

export function createCollection(collectionMetadata) {
    const commonContactId = 'mjol.near';

    const args = {
        metadata: collectionMetadata,
    };

    return functionCall({
        contractId: commonContactId,
        methodName: 'create_collection',
        args,
        gas: GAS,
        attachedDeposit: SM_DEPOSIT
    })
}