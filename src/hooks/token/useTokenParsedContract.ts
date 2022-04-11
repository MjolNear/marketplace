import {ContractId} from "../../business-logic/types/aliases";
import {useEffect, useState} from "react";
import {contractAPI} from "../../near/api/contracts";
import {TContractResponse} from "../../near/api/types/response/contracts";

export const useTokenParsedContract = (contractId: ContractId) => {

    const [contract, setContract] = useState<TContractResponse>()

    useEffect(() => {
        contractAPI.fetchContract(contractId)
            .then(setContract)
    }, [contractId])

    return contract
}