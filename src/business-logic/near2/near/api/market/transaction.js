import {config, wallet, contract} from "../../setup/near";
import {utils} from "near-api-js";
import {GAS, SM_DEPOSIT} from "../../constants";


export async function giveApprove(contractId, tokenId, price) {
    const nearAmount = utils.format.parseNearAmount(price.toString());
    return await wallet.account().functionCall(
        contractId,
        'nft_approve',
        {
            token_id: tokenId,
            account_id: config.contractName,
            msg: JSON.stringify({price: nearAmount})
        },
        GAS,
        SM_DEPOSIT
    )
}

export async function buyNftWithPayouts(contractId, tokenId, price) {
    const nearAmount = utils.format.parseNearAmount(price);
    return await contract.buy_with_payouts(
        {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        GAS,
        nearAmount
    )
}

export async function unlistNFT(contractId, tokenId) {
    return await contract.remove_from_market(
        {
            nft_contract_id: contractId,
            token_id: tokenId
        },
        GAS,
        SM_DEPOSIT
    )
}