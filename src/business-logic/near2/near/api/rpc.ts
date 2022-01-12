import BN from "bn.js";
import {wallet} from "../setup/near";
import {MJOL_MARKET_CONTRACT_ID} from "../enviroment/contract-names";
import {GAS, SM_DEPOSIT} from "../constants";
import {ContractId} from "./types";

export interface ViewFunctionOptions {
    contractId: ContractId,
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

export function viewFunction<T = any>({contractId, methodName, args}: ViewFunctionOptions): Promise<T> {
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

export function mjolViewFunction<T = any>({methodName, args}: MjolViewFunctionOptions): Promise<T> {
    return viewFunction<T>({
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