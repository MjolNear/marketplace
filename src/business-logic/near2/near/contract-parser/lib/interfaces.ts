import {JsonType} from './JsonType';

export type StandardInterfaceId =
    | 'nep171'
    | 'nep177'
    | 'nep178'
    | 'nep181'
    | 'nep199'


/**
 * Well-known smart contract interface specification
 */
export interface StandardInterface {
    /** Unique interface ID */
    id: StandardInterfaceId;
    /** Human-readable interface name */
    name: string;
    /** Methods provided by interface */
    methods: StandardInterfaceMethod[];
}

export interface StandardInterfaceArgument {
    name: string;
    /**
     * An argument can support one or multiple types
     * (e.g. Rust's `Option<String>` becomes `['string', 'null']`)
     */
    type: JsonType | JsonType[];
}

export interface StandardInterfaceMethod {
    name: string;
    args: StandardInterfaceArgument[];
}

/**
 * Mapping interface ID to interface specification
 */
export const interfaces: Readonly<Record<StandardInterfaceId, StandardInterface>> = Object.freeze({
    nep171: {
        id: "nep171",
        name: 'NFT Core (NEP-171)',
        methods: [
            {
                name: 'nft_transfer',
                args: [
                    {name: 'receiver_id', type: 'string'},
                    {name: 'token_id', type: 'string'},
                    {name: 'approval_id', type: ['number', 'null']},
                    {name: 'memo', type: ['string', 'null']},
                ],
            },
            {
                name: 'nft_transfer_call',
                args: [
                    {name: 'receiver_id', type: 'string'},
                    {name: 'token_id', type: 'string'},
                    {name: 'approval_id', type: ['number', 'null']},
                    {name: 'memo', type: ['string', 'null']},
                    {name: 'msg', type: 'string'},
                ],
            },
            {
                name: 'nft_token',
                args: [{name: 'token_id', type: 'string'}],
            },
        ],
    },
    nep177: {
        id: "nep177",
        name: 'NFT Metadata (NEP-177)',
        methods: [
            {
                name: 'nft_metadata',
                args: [],
            },
        ],
    },
    nep178: {
        id: "nep178",
        name: 'NFT Approval Management (NEP-178)',
        methods: [
            {
                name: 'nft_approve',
                args: [
                    {name: 'token_id', type: 'string'},
                    {name: 'account_id', type: 'string'},
                    {name: 'msg', type: ['string', 'null']},
                ],
            },
            {
                name: 'nft_revoke',
                args: [
                    {name: 'token_id', type: 'string'},
                    {name: 'account_id', type: 'string'},
                ],
            },
            {
                name: 'nft_revoke_all',
                args: [{name: 'token_id', type: 'string'}],
            },
            {
                name: 'nft_is_approved',
                args: [
                    {name: 'token_id', type: 'string'},
                    {name: 'approved_account_id', type: 'string'},
                    {name: 'approval_id', type: ['number', 'null']},
                ],
            },
        ],
    },
    nep181: {
        id: "nep181",
        name: 'Non-Fungible Token Enumeration (NEP-181)',
        methods: [
            {
                name: 'nft_total_supply',
                args: [],
            },
            {
                name: 'nft_tokens',
                args: [
                    {name: 'from_index', type: ['string', 'null']},
                    {name: 'limit', type: ['number', 'null']},
                ],
            },
            {
                name: 'nft_supply_for_owner',
                args: [{name: 'account_id', type: 'string'}],
            },
            {
                name: 'nft_tokens_for_owner',
                args: [
                    {name: 'account_id', type: 'string'},
                    {name: 'from_index', type: ['string', 'null']},
                    {name: 'limit', type: ['number', 'null']},
                ],
            },
        ],
    },
    nep199: {
        id: "nep199",
        name: 'Standard for a Multiple-Recipient-Payout mechanic on NFT Contracts (NEP-199)',
        methods: [
            {
                name: 'nft_payout',
                args: [
                    {name: 'token_id', type: 'string'},
                    {name: 'balance', type: 'U128'},
                    {name: 'max_len_payout', type: 'u32'},
                ],
            },
            {
                name: 'nft_transfer_payout',
                args: [
                    {name: 'receiver_id', type: 'AccountId'},
                    {name: 'token_id', type: 'string'},
                    {name: 'approval_id', type: 'u64'},
                    {name: 'balance', type: 'U128'},
                    {name: 'max_len_payout', type: 'u32'},
                ],
            },
        ],
    },
});
