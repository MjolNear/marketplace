import {AccountId} from "../../../models/types";
import {collectionAPI} from "./api";


export async function getUserContracts(accountId: AccountId) {
    return await collectionAPI.fetchUserCollections(accountId)
}
