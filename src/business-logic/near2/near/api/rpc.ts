import BN from "bn.js";
import {wallet} from "../setup/near";
import {MJOL_MARKET_CONTRACT_ID} from "../enviroment/contract-names";
import {GAS, SM_DEPOSIT} from "../constants";

export interface ViewFunctionOptions {
    contractId: string,
    methodName: string,
    args: object
}

export interface FunctionCallOptions extends ViewFunctionOptions {
    gas?: BN,
    attachedDeposit?: BN,
    walletCallbackUrl?: string
}

export interface MjolViewFunctionOptions {
    methodName: string,
    args: object
}

export interface MjolFunctionCallOptions extends MjolViewFunctionOptions {
    gas?: BN,
    attachedDeposit?: BN,
    walletCallbackUrl?: string
}

export const viewFunction = ({contractId, methodName, args}: ViewFunctionOptions) => {
    return wallet.account().viewFunction(contractId, methodName, args)
}

export const functionCall = ({
    contractId,
    methodName,
    args,
    gas,
    attachedDeposit,
    walletCallbackUrl
}: FunctionCallOptions) => {
    return wallet.account().functionCall({
        contractId,
        methodName,
        args,
        gas,
        attachedDeposit,
        walletCallbackUrl
    })
}

export const mjolViewFunction = ({methodName, args}: MjolViewFunctionOptions) => {
    return viewFunction({
        contractId: MJOL_MARKET_CONTRACT_ID, methodName, args
    })
}

export const mjolFunctionCall = ({
    methodName,
    args,
    gas = GAS,
    attachedDeposit = SM_DEPOSIT,
    walletCallbackUrl
}: MjolFunctionCallOptions) => {
    return functionCall({
        contractId: MJOL_MARKET_CONTRACT_ID,
        methodName,
        args,
        gas,
        attachedDeposit,
        walletCallbackUrl
    })
}