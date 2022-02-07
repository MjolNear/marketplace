import {utils} from "near-api-js";
import {GAS, SM_DEPOSIT, YOCTO_NEAR} from "../../constants";
import {functionCall, marketFunctionCall} from "../rpc";
import BN from "bn.js";
import {MARKET_CONTRACT_ID} from "../../enviroment/contract-names";
import {ContractId, StringAmount, TokenId} from "../../../models/types";
import {Nft} from "../../../models/nft";


export function giveApprove(contractId: ContractId, tokenId: TokenId, stringPrice: StringAmount, nft: Nft) {
    const price = utils.format.parseNearAmount(stringPrice.toString());

    const json_nft = {
        contract_id: nft.contractId,
        token_id: nft.tokenId,
        owner_id: nft.ownerId,
        title: nft.title,
        description: nft.description,
        copies: nft.copies ? (nft.copies).toString() : "1",
        media_url: nft.mediaURL,
        reference_url: nft.referenceURL,
        mint_site: nft.mintedInfo ? {
            name: nft.mintedInfo.name,
            nft_link: nft.mintedInfo.link
        } : {
            name: "",
            nft_link: ""
        },
        price
    }

    return functionCall({
        contractId,
        methodName: 'nft_approve',
        args: {
            token_id: tokenId,
            account_id: MARKET_CONTRACT_ID,
            msg: JSON.stringify({json_nft})
        },
        gas: GAS,
        attachedDeposit: SM_DEPOSIT
    })
}

export function buyNftWithPayouts(
    contractId: ContractId,
    tokenId: TokenId,
    price: StringAmount,
    hasPayouts: boolean = false) {
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