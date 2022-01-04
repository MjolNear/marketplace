import {GAS, SM_DEPOSIT} from "./contract";



export function mintToCommonCollection(token_metadata, payout) {
    const common_contract_id = 'mjol.near';
    const token_id = 'token-' + new Date().getTime();

    const data = {
        token_id: token_id,
        token_owner_id: window.accountId,
        token_metadata: token_metadata,
    };
    if (payout !== null) {
        data["payout"] = payout
    }
    window.walletConnection.account().functionCall(
        common_contract_id,
        'nft_mint',
        data,
        GAS,
        SM_DEPOSIT
    )
}