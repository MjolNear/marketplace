import {ContractId} from "../../../../@types/Aliases";
import {ContractVerificationStatus} from "../../../../@types/Contract";

export interface TContractResponse {
    contractId: ContractId,
    verification: ContractVerificationStatus,
    isCorrect: boolean,
    hasPayouts: boolean,
    supportedNeps: string[],
    missedNeps: string[]
}

export enum ContractStatusResponseCode {
    FAILURE = 0,
    SUCCESS = 1
}

export interface StatusResponse<T> {
    status: ContractStatusResponseCode,
    data: T
}

export type ContractStatusResponse = StatusResponse<TContractResponse>