import {GAS, SM_DEPOSIT} from "../../constants";
import {getAccountId} from "../../enviroment/near";
import {functionCall} from "../rpc";

export function mintToCommonCollection(tokenMetadata, payout) {
    const commonContactId = 'mjol.near';
    const tokenId = 'token-' + new Date().getTime();

    const args = {
        token_id: tokenId,
        token_owner_id: getAccountId(),
        token_metadata: tokenMetadata,
    };
    if (payout !== null) {
        args["payout"] = payout
    }
    return functionCall({
        contractId: commonContactId,
        methodName: 'nft_mint',
        args,
        gas: GAS,
        attachedDeposit: SM_DEPOSIT
    })
}