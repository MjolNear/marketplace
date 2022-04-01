import {MARKET_CONTRACT_ID, MJOL_CONTRACT_ID} from "./contract-names";
import {GAS, SM_DEPOSIT} from "../constants";
import BN from "bn.js";
import {getCurrentWallet} from "../wallet/wallet";
import {webWallet} from "../wallet/web-wallet";

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

export type MjolViewFunctionOptions = Omit<ViewFunctionOptions, 'contractId'>
export type MjolFunctionCallOptions = Omit<FunctionCallOptions, 'contractId'>


export function viewFunction<T = any>({contractId, methodName, args}: ViewFunctionOptions): Promise<T> {
    return webWallet.viewFunction(contractId, methodName, args)
}

export const functionCall = ({
    contractId,
    methodName,
    args,
    gas = GAS,
    attachedDeposit = SM_DEPOSIT,
    walletCallbackUrl
}: FunctionCallOptions) => {
    return getCurrentWallet().functionCall({
        contractId,
        methodName,
        args,
        gas,
        attachedDeposit,
        walletCallbackUrl
    })
}

export function marketViewFunction<T = any>(options: MjolViewFunctionOptions) {
    return viewFunction<T>({
        contractId: MARKET_CONTRACT_ID,
        ...options
    })
}

export function mjolViewFunction<T = any>(options: MjolViewFunctionOptions) {
    return viewFunction<T>({
        contractId: MJOL_CONTRACT_ID,
        ...options
    })
}

export const mjolFunctionCall = (options: MjolFunctionCallOptions) => {
    return functionCall({
        contractId: MJOL_CONTRACT_ID,
        ...options
    })
}

export const marketFunctionCall = (options: MjolFunctionCallOptions) => {
    return functionCall({
        contractId: MARKET_CONTRACT_ID,
        ...options
    })
}