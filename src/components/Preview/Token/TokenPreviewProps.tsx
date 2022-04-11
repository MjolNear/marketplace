import {ApprovedToken} from "../../../business-logic/types/nft";
import {TContractResponse} from "../../../near/api/types/response/contracts";
import {TPayouts} from "../../../business-logic/types/aliases";

export interface TokenPreviewProps {
    token: ApprovedToken
    contract?: TContractResponse
    payouts?: TPayouts
}