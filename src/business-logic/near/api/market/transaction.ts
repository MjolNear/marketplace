import {utils} from "near-api-js";
import {GAS, SM_DEPOSIT, YOCTO_NEAR} from "../../constants";
import {functionCall, marketFunctionCall} from "../../enviroment/rpc";
import BN from "bn.js";
import {MARKET_CONTRACT_ID} from "../../enviroment/contract-names";
import {ContractId, StringAmount, TokenId} from "../../../models/types";
import {Token} from "../../../models/nft";


export function giveApprove(
    token: Token,
    stringPrice: StringAmount,
) {
    const price = utils.format.parseNearAmount(stringPrice.toString());

    const jsonToken = {
        contract_id: token.contractId,
        token_id: token.tokenId,
        owner_id: token.ownerId,
        title: token.title,
        description: token.description,
        copies: token.copies ? (token.copies).toString() : "1",
        media_url: token.media,
        reference_url: token.ipfsReference,
        collection_metadata: token.collection
            ? {
                collection_id: token.collection.collectionId,
                collection_name: token.collection.name
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

export function unlistNFT(contractId: ContractId, tokenId: TokenId) {
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

export const updatePrice = (contractId: ContractId, tokenId: TokenId, newPrice: string) => {
    const newPriceInYocto = utils.format.parseNearAmount(newPrice)
    return marketFunctionCall({
        methodName: "update_token_price",
        args: {
            contract_id: contractId,
            token_id: tokenId,
            price: newPriceInYocto
        },
        gas: GAS,
        attachedDeposit: YOCTO_NEAR
    })
}