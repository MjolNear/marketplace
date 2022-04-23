import {ContractVerificationStatus} from "../../../@types/Contract";

export const resolveVerificationText = (verification: ContractVerificationStatus, onVerify: string = '') => {
    switch (verification) {
        case ContractVerificationStatus.NotSupported:
            return "Not supported"
        case ContractVerificationStatus.Unverified:
            return "Unverified"
        case ContractVerificationStatus.Verified:
            return onVerify
    }
}