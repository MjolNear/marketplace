import {mjolFunctionCall} from "../../enviroment/rpc";
import {SM_DEPOSIT} from "../../constants";
import BN from "bn.js";
import {getCurrentWallet} from "../../wallet/wallet";

export function mintToCommonCollection(tokenMetadata, payout, collectionId) {
    const args = {
        token_owner_id: getCurrentWallet().getAccountId(),
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
            args,
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
        methodName,
        args
    })
}