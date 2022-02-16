import {getAccountId} from "../../enviroment/near";
import {mjolFunctionCall} from "../rpc";
import {GAS, SM_DEPOSIT} from "../../constants";
import BN from "bn.js";

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
    let deposit = SM_DEPOSIT.mul(new BN(Math.ceil(tokenMetadata.copies / 11)));
    return mjolFunctionCall({
            methodName: 'nft_mint',
            args: args,
            gas: GAS,
            attachedDeposit: deposit
        }
    )
}


export function createCollection(collectionMetadata, methodName) {
    let args = {
        metadata: collectionMetadata,
    };
    if (methodName === 'add_collection') {
        args.owner_id = collectionMetadata.contract
    }

    return mjolFunctionCall({
        methodName: methodName,
        args
    })
}