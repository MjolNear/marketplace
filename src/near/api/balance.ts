import {AccountId} from "../../@types/Aliases";
import {viewFunction} from "../enviroment/rpc";
import {getCurrentWallet} from "../wallet/wallet";

export const getUserBalance = (accountId: AccountId) => {
    return viewFunction({
        contractId: accountId,
        methodName: "state",
        args: {}
    })
}