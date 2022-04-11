import {NearCoreToken} from "./core";
import {NearTokenMetadata} from "./metadata";

export interface NearToken extends NearCoreToken {
    metadata: NearTokenMetadata
}