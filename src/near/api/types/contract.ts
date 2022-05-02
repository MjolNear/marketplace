import {Optional} from "../../../@types/Aliases";


export interface ContractMetadata {
    spec?: Optional<string>
    name?: Optional<string>
    symbol?: Optional<string>
    icon?: Optional<string>
    base_uri?: Optional<string>
    reference?: Optional<string>
    reference_hash?: Optional<string>
}