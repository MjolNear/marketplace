import {CollectionId, ContractId, Optional} from "../../@types/Aliases";
import {useFindCollectionByContractQuery} from "../../graphql/generated/collections-graphql";
import {MJOL_CONTRACT_ID} from "../../near/enviroment/contract-names";
import {parseMjolCollection} from "../../near/token-parser/parser";

export interface FetchWhitelistedCollectionIdHookResult {
    loading: boolean,
    data?: {
        collectionId: CollectionId,
        image: string
        title: string
    }
}

export const useFetchTokenCollection = (
    contractId: ContractId,
    extra?: Optional<string>
): FetchWhitelistedCollectionIdHookResult => {

    let collectionId = contractId === MJOL_CONTRACT_ID
        ? parseMjolCollection(extra)?.collectionId
        : null

    const {data, loading} = useFindCollectionByContractQuery({
        fetchPolicy: "cache-first",
        nextFetchPolicy: "cache-first",
        variables: {
            contractId,
            collectionId
        }
    })

    const collection = contractId === MJOL_CONTRACT_ID
        ? collectionId
            ? data?.mjolnear
            : null
        : data?.whitelisted

    if (collection && collection.length !== 0) {
        const entity = collection[0]
        return {loading, data: {...entity}}
    }

    return {loading}
}