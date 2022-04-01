import {ApprovedToken} from "../../../business-logic/models/nft";
import {TContractResponse} from "../../../business-logic/near/api/types/response/contracts";
import {TPayouts} from "../../../business-logic/types/aliases";

export interface TokenPreviewProps {
    token: ApprovedToken
    contract?: TContractResponse
    payouts?: TPayouts
}