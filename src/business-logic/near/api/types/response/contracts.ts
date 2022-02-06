import {ContractId} from "../../../../models/types";
import {ContractVerificationStatus} from "../../../../models/contract";

export interface ContractResponse {
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

export type ContractStatusResponse = StatusResponse<ContractResponse>