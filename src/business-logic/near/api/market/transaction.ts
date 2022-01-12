import {utils} from "near-api-js";
import {GAS, SM_DEPOSIT, YOCTO_NEAR} from "../../constants";
import {functionCall, mjolFunctionCall} from "../rpc";
import BN from "bn.js";
import {MJOL_MARKET_CONTRACT_ID} from "../../enviroment/contract-names";
import {ContractId, StringAmount, TokenId} from "../../../models/types";


export function giveApprove(contractId: ContractId, tokenId: TokenId, stringPrice: StringAmount) {
    const price = utils.format.parseNearAmount(stringPrice.toString());
    return functionCall({
        contractId,
        methodName: 'nft_approve',
        args: {
            token_id: tokenId,
            account_id: MJOL_MARKET_CONTRACT_ID,
            msg: JSON.stringify({price})
        },
        gas: GAS,
        attachedDeposit: SM_DEPOSIT
    })
}

export function buyNftWithPayouts(contractId: ContractId, tokenId: TokenId, price: StringAmount) {
    const nearAmount = utils.format.parseNearAmount(price) || "0";
    return mjolFunctionCall({
        methodName: 'buy_with_payouts',
        args: {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        gas: GAS,
        attachedDeposit: new BN(nearAmount)
    })
}

export function unlistNFT(contractId: ContractId, tokenId: TokenId) {
    return mjolFunctionCall({
        methodName: 'remove_from_market',
        args: {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        gas: GAS,
        attachedDeposit: YOCTO_NEAR
    })
}