import {mjolFunctionCall} from "../../enviroment/rpc";
import {SM_DEPOSIT} from "../../constants";
import BN from "bn.js";
import {AccountId, CollectionId} from "../../../@types/Aliases";
import {CreateCollectionMetadataDto} from "../../../@types/Collection";

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


export const createCollection = (metadata: CreateCollectionMetadataDto) => {
    return mjolFunctionCall({
        methodName: "create_collection",
        args: {
            metadata
        }
    })
}

export const addWhitelistedCollection = (
    ownerId: AccountId,
    contractId: CollectionId,
    metadata: CreateCollectionMetadataDto
) => {
    return mjolFunctionCall({
        methodName: "add_collection",
        args: {
            owner_id: ownerId,
            contract_id: contractId,
            metadata
        }
    })
}