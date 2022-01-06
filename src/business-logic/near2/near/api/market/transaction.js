import {config} from "../../setup/near";
import {utils} from "near-api-js";
import {GAS, SM_DEPOSIT} from "../../constants";


export async function giveApprove(contractId, tokenId, price) {
    const yoctoNearAmount = utils.format.parseNearAmount(price.toString());
    return await window.walletConnection.account().functionCall(
        contractId,
        'nft_approve',
        {
            token_id: tokenId,
            account_id: config.contractName,
            msg: JSON.stringify({price: yoctoNearAmount})
        },
        GAS,
        SM_DEPOSIT
    )
}

export async function buyNftWithPayouts(contractId, tokenId, price) {
    const yoctoNearAmount = utils.format.parseNearAmount(price.toString());
    return await window.contract.buy_with_payouts(
        {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        GAS,
        yoctoNearAmount
    )
}

export async function unlistNFT(contractId, tokenId) {
    return await window.contract.remove_from_market(
        {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        GAS,
        SM_DEPOSIT
    )
}