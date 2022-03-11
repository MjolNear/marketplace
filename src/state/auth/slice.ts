import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WalletInstance} from "../../business-logic/near/wallet/wallet";

interface IAuthState {
    wallet?: WalletInstance,
    accountId?: string
    isSignedIn: boolean
}

const initialState: IAuthState = {
    isSignedIn: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setWallet: (state, action: PayloadAction<WalletInstance>) => {
            state.wallet = action.payload
        },
        login: (state, action: PayloadAction<string>) => {
            state.accountId = action.payload
            state.isSignedIn = true
        },
        logout: () => initialState
    }
})