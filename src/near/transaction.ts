import {utils} from "near-api-js";
import {GAS, SM_DEPOSIT, YOCTO_NEAR} from "./constants";
import {functionCall, marketFunctionCall} from "./enviroment/rpc";
import BN from "bn.js";
import {MARKET_CONTRACT_ID} from "./enviroment/contract-names";
import {CollectionId, ContractId, Optional, StringAmount, TokenId} from "../business-logic/types/aliases";
import {Token} from "../business-logic/types/nft";


export function giveApprove(
    token: Token,
    stringPrice: StringAmount,
    collectionMetadata?: Optional<{
        collectionId: CollectionId,
        title: string
    }>
) {
    const price = utils.format.parseNearAmount(stringPrice.toString());

    const jsonToken = {
        title: token.title,
        description: token.description,
        copies: token.copies ? (token.copies).toString() : "1",
        media_url: token.media,
        reference_url: token.ipfsReference,
        collection_metadata: collectionMetadata
            ? {
                collection_id: collectionMetadata.collectionId,
                collection_name: collectionMetadata.title
            }
            :
            null
        ,
        mint_site: {
            name: token.mintedSiteName,
            nft_link: token.mintedSiteLink
        },
        price
    }

    return functionCall({
        contractId: token.contractId,
        methodName: 'nft_approve',
        args: {
            token_id: token.tokenId,
            account_id: MARKET_CONTRACT_ID,
            msg: JSON.stringify({json_nft: jsonToken})
        },
        gas: GAS,
        attachedDeposit: SM_DEPOSIT
    })
}

export function buyNftWithPayouts(
    contractId: ContractId,
    tokenId: TokenId,
    price: StringAmount,
    hasPayouts: boolean = false
) {
    const nearAmount = utils.format.parseNearAmount(price) || "0";
    return marketFunctionCall({
        methodName: 'buy',
        args: {
            nft_contract_id: contractId,
            token_id: tokenId,
            is_payouts_supported: hasPayouts
        },
        gas: GAS,
        attachedDeposit: new BN(nearAmount)
    })
}

export function unlistNft(contractId: ContractId, tokenId: TokenId) {
    return marketFunctionCall({
        methodName: 'remove_from_market',
        args: {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        gas: GAS,
        attachedDeposit: YOCTO_NEAR
    })
}

export const updateNftPrice = (contractId: ContractId, tokenId: TokenId, newPrice: string) => {
    const newPriceInYocto = utils.format.parseNearAmount(newPrice)
    return marketFunctionCall({
        methodName: "update_token_price",
        args: {
            nft_contract_id: contractId,
            token_id: tokenId,
            price: newPriceInYocto
        },
        gas: GAS,
        attachedDeposit: YOCTO_NEAR
    })
}