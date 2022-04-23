import {NearCoreToken} from "./core";
import {NearTokenMetadata} from "./metadata";
import {Optional} from "../../../../@types/Aliases";

export interface NearToken extends NearCoreToken {
    metadata: NearTokenMetadata
    approved_account_ids?: Optional<Record<string, number>>
}