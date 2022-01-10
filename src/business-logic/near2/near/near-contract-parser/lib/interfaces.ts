import {JsonType} from './JsonType';

export type StandardInterfaceId =
    | 'nep141'
    | 'nep148'
    | 'nep171'
    | 'nep177'
    | 'nep178'


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
    nep141: {
        id: "nep141",
        name: 'FT Core (NEP-141)',
        methods: [
            {
                name: 'ft_transfer',
                args: [
                    {name: 'receiver_id', type: 'string'},
                    {name: 'amount', type: 'string'},
                    {name: 'memo', type: ['string', 'null']},
                ],
            },
            {
                name: 'ft_transfer_call',
                args: [
                    {name: 'receiver_id', type: 'string'},
                    {name: 'amount', type: 'string'},
                    {name: 'memo', type: ['string', 'null']},
                    {name: 'msg', type: 'string'},
                ],
            },
            {
                name: 'ft_total_supply',
                args: [],
            },
            {
                name: 'ft_balance_of',
                args: [{name: 'account_id', type: 'string'}],
            },
        ],
    },
    nep148: {
        id: "nep148",
        name: 'FT Metadata (NEP-148)',
        methods: [
            {
                name: 'ft_metadata',
                args: [],
            },
        ],
    },
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
});
