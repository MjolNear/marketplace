import {NearCoreToken} from "./core";
import {NearTokenMetadata} from "./metadata";
import {Optional} from "../../../../business-logic/types/aliases";

export interface NearToken extends NearCoreToken {
    metadata: NearTokenMetadata
    approved_account_ids?: Optional<Record<string, number>>
}