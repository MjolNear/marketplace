import {Optional, StringPrice} from "./Aliases";
import {ContractVerificationStatus} from "./Contract";


export interface TokenCollectionMetadata {
    collectionId: string
    name: string
}

export interface CoreToken {
    contractId: string
    tokenId: string
    ownerId: string
    title: string
    media?: Optional<string>
    description?: Optional<string>
    extra?: Optional<string>
    price?: Optional<StringPrice>
}

export interface TokenContractInfo {
    contractName: string,
    verification: ContractVerificationStatus
}

export interface TokenApproveInfo {
    isApproved: boolean
}

export interface TokensReferenceInfo {
    ipfsReference?: Optional<string>
    copies?: Optional<number>
}

// Grid token contains all fields without reference and approval info
export type GridToken = Omit<CoreToken, 'ownerId'> & TokenContractInfo

// Contains fields as metadata, price
export type Token = CoreToken & TokensReferenceInfo & TokenContractInfo

// Contains all fields and approval status
export type ApprovedToken = Token & TokenApproveInfo