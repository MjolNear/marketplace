import {BUY_NFT, SELL_NFT, SET_ERROR, SET_FETCHING, SET_NFT, SET_PAYOUTS} from "./actions";
import {login} from "../../../business-logic/near/contract";


export const NFT_STATE = Object.freeze(
    {
        "SELL": "Sell",
        "BUY": "Buy",
        "UNLIST": "Unlist",
        "CONNECT_WALLET": "Connect wallet",
        "NOT_LISTED": "Not listed"
    }
)

const initialState = {
    nft: null,
    payouts: [],
    isError: false,
    isFetching: false,

    resolveButtonState: (accountId, nft) => {
        if (!accountId) {
            return {
                state: NFT_STATE.CONNECT_WALLET,
                onClick: login
            }
        }
        if (nft.isListed() && accountId === nft.ownerId) {
            return {
                state: NFT_STATE.UNLIST,
                onClick: () => alert('unlisted')
            }
        }
        if (nft.isListed()) {
            return {
                state: NFT_STATE.BUY,
                onClick: () => alert("buy")
            }
        }
        if (accountId === nft.ownerId) {
            return {
                text: NFT_STATE.SELL,
                onClick: () => alert("sell")
            }
        }
        return {
            state: NFT_STATE.NOT_LISTED,
            onClick: () => alert('not listed'),
            disabled: true
        }
    }
}

export const previewNftReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_NFT:
            return state
        case SELL_NFT:
            return state
        case SET_NFT:
            return {
                ...state,
                nft: action.payload
            }
        case SET_PAYOUTS:
            return {
                ...state,
                payouts: Object
                    .entries(action.payload)
                    .map(kv => {
                        const [name, royalty] = kv
                        return {name, value: `${royalty}%`}
                    })
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}