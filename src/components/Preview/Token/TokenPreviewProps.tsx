import {ApprovedToken} from "../../../@types/Token";
import {TContractResponse} from "../../../near/api/types/response/contracts";
import {TokenPayouts} from "../../../@types/Aliases";

export interface TokenPreviewProps {
    token: ApprovedToken
    contract?: TContractResponse
    payouts?: TokenPayouts
}