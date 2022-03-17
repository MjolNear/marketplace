import {ContractId} from "../../business-logic/models/types";
import {useEffect, useState} from "react";
import {contractAPI} from "../../business-logic/near/api/contracts";
import {TContractResponse} from "../../business-logic/near/api/types/response/contracts";

export const useTokenParsedContract = (contractId: ContractId) => {

    const [contract, setContract] = useState<TContractResponse>()

    useEffect(() => {
        contractAPI.fetchContract(contractId)
            .then(setContract)
    }, [contractId])

    return contract
}