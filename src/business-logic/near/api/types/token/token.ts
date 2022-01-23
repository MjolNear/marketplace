import {CoreToken} from "./core";
import {TokenMetadata} from "./metadata";

export interface Token extends CoreToken {
    metadata: TokenMetadata
}