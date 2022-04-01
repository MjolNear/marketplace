import {mjolFunctionCall} from "../../enviroment/rpc";
import {SM_DEPOSIT} from "../../constants";
import BN from "bn.js";
import {AccountId, CollectionId} from "../../../business-logic/types/aliases";

export function mintToCommonCollection(
    tokenMetadata: {
        title: string,
        description: string,
        copies: number,
        media: string,
        reference: string
    },
    payout: { payout: Record<string, string> } | null,
    accountId: AccountId,
    collectionId?: CollectionId
) {
    const args: {
        token_owner_id: AccountId,
        token_metadata: {
            title: string,
            description: string,
            copies: Number,
            media: string,
            reference: string
        },
        payout?: {
            payout: Record<string, string>
        },
        collection_id?: CollectionId
    } = {
        token_owner_id: accountId,
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


export function createCollection(collectionMetadata: any, methodName: any) {
    let args: {
        metadata: any
        owner_id?: string
    } = {
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