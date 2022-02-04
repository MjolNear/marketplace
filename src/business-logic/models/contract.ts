import {ContractAccordance} from "../near/api/contracts/parser/methods";
import {ContractId} from "./types";

export enum MintedContract {
    Verified = "Verified",
    Unverified = "Not verified",
    NotSupported = "Not supported"
}

export interface ContractInfo {
    contractId: ContractId,
    accordance: ContractAccordance
}