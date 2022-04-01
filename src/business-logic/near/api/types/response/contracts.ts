import {ContractId} from "../../../../types/aliases";
import {ContractVerificationStatus} from "../../../../models/contract";

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