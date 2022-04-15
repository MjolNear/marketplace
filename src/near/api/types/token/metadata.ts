import {Optional} from "../../../../business-logic/types/aliases";

/**
 * NFT Token metadata standard
 *
 * {@link https://github.com/near/NEPs/blob/master/specs/Standards/NonFungibleToken/Metadata.md}
 */
export interface NearTokenMetadata {
    // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
    title?: Optional<string>

    // free-form description
    description?: Optional<string>

    // URL to associated media, preferably to decentralized, content-addressed storage
    media?: Optional<string>

    // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
    media_hash?: Optional<string>

    // number of copies of this set of metadata in existence when token was minted.
    copies?: Optional<number>

    // When token was issued or minted, Unix epoch in milliseconds
    issued_at?: Optional<number>

    // When token expires, Unix epoch in milliseconds
    expires_at?: Optional<number>

    // When token starts being valid, Unix epoch in milliseconds
    starts_at?: Optional<number>

    // When token was last updated, Unix epoch in milliseconds
    updated_at?: Optional<number>

    // anything extra the NFT wants to store on-chain. Can be stringified JSON.
    extra?: Optional<string>

    // URL to an off-chain JSON file with more info.
    reference?: Optional<string>

    // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
    reference_hash?: Optional<string>
}