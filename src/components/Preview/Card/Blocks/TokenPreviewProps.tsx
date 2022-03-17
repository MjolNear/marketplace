import {ApprovedToken} from "../../../../business-logic/models/nft";
import {TContractResponse} from "../../../../business-logic/near/api/types/response/contracts";
import {TPayouts} from "../../../../business-logic/models/types";

export interface TokenPreviewProps {
    token: ApprovedToken
    contract?: TContractResponse
    payouts?: TPayouts
}