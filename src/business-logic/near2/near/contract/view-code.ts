import {wallet} from "../setup/near";
import {parseContract} from "near-contract-parser";
import {QueryResponseKind} from "near-api-js/lib/providers/provider";

interface ViewCode extends QueryResponseKind {
    code_base64: string
}

// Reverses WASM contract and extract methods
export const viewMethods = async (contractId: string) => {
    const near = wallet._near
    return near.connection.provider.query<ViewCode>({
        account_id: contractId,
        finality: 'final',
        request_type: 'view_code'
    }).then(response => parseContract(response.code_base64))
}