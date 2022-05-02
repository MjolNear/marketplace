import {CollectionId, ContractId, TokenId} from "./Aliases";
import {MJOL_CONTRACT_ID} from "../near/enviroment/contract-names";

export const collectionUID = (contractId: ContractId, collectionId: CollectionId) => {
    if (contractId === MJOL_CONTRACT_ID) {
        return `${contractId}-${collectionId}`
    } else {
        return contractId
    }
}

export const tokenUID = (contractId: ContractId, tokenId: TokenId) => {
    return `${contractId}-${tokenId}`
}