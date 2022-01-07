import {GAS, SM_DEPOSIT} from "../near2/near/constants";
import {wallet, getAccountId} from "../near2/near/setup/near";

export function mintToCommonCollection(token_metadata, payout) {
    const common_contract_id = 'mjol.near';
    const token_id = 'token-' + new Date().getTime();

    const data = {
        token_id: token_id,
        token_owner_id: getAccountId(),
        token_metadata: token_metadata,
    };
    if (payout !== null) {
        data["payout"] = payout
    }
    wallet.account().functionCall(
        common_contract_id,
        'nft_mint',
        data,
        GAS,
        SM_DEPOSIT
    )
}