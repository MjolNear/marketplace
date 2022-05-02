import {AccountId, ContractId} from "../../@types/Aliases";
import {useEffect, useState} from "react";
import {contractAPI} from "../../near/api/contracts";
import {MJOL_CONTRACT_ID, PARAS_CONTRACT_ID} from "../../near/enviroment/contract-names";
import {useContractsQuery} from "../../graphql/generated/graphql";


export const useFetchUserContracts = (
    accountId: AccountId
) => {
    const [contracts, setContracts] = useState<ContractId[]>([])

    useEffect(() => {
        contractAPI.fetchUserTokenContracts(accountId)
            .then(setContracts)
            .catch(() => setContracts([MJOL_CONTRACT_ID, PARAS_CONTRACT_ID]))
    }, [accountId])

    console.log(contracts)

    return useContractsQuery({
        fetchPolicy: "cache-first",
        nextFetchPolicy: "cache-first",
        variables: {
            contracts
        }
    })
}