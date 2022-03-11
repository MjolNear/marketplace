import React, {useEffect, useReducer} from 'react'
import AppRouter from "./AppRouter";
import Navbar from "./pages/navbar/Navbar";
import FooterPage from "./pages/footer/FooterPage";
import {webWallet} from "./business-logic/near/wallet/web-wallet";
import {
    configureSenderWallet,
    removeSenderLoginRes,
    saveSenderLoginRes,
    SENDER_WALLET_SIGNED_IN_STATE_KEY
} from "./business-logic/near/wallet/sender-wallet";
import {WalletContext} from './business-logic/near/wallet/wallet';


export default function App() {

    const signedInStateReducer = (
        state: { isSignedIn: boolean, accountId?: string },
        action: { type: 'signIn' | 'signOut' }
    ) => {
        switch (action.type) {
            case 'signIn':
                return {
                    isSignedIn: true,
                    accountId: undefined
                };
            case 'signOut':
                return {
                    isSignedIn: false,
                };
        }
    };

    const SignedInStateReducer = useReducer(signedInStateReducer, {
        isSignedIn: false,
    });

    const [signedInState, signedInStateDispatch] = SignedInStateReducer;


    useEffect(() => {
        if (webWallet.isSignedIn()) {
            signedInStateDispatch({type: 'signIn'});
        }
    }, [webWallet.isSignedIn()]);


    useEffect(() => {
        const windowRef = window as any
        setTimeout(() => {
            if (windowRef.near) {
                windowRef.near.on('signIn', () => {
                    saveSenderLoginRes();
                    signedInStateDispatch({type: 'signIn'});
                });
                windowRef.near.on('accountChanged', (changedAccountId: string) => {
                    window.location.reload();
                    saveSenderLoginRes(changedAccountId);
                });
                windowRef.near.on('signOut', () => {
                    removeSenderLoginRes();
                    signedInStateDispatch({type: 'signOut'});
                });
            }

            const signedInRes = localStorage.getItem(
                SENDER_WALLET_SIGNED_IN_STATE_KEY
            );

            if (windowRef.near && signedInRes && !configureSenderWallet(window)?.isSignedIn()) {
                configureSenderWallet(window)
                    ?.requestSignIn()
                    .then(() => {
                        saveSenderLoginRes();
                    });
            }
        }, 200);
    }, [window, (window as any)?.near]);

    return (
        <WalletContext.Provider value={{signedInState, signedInStateDispatch}}>
            <Navbar/>
            <div className="pt-[69px] min-h-[calc(100vh-69px)]">
                {/*<MarketStats/>*/}
                <AppRouter/>
            </div>
            <FooterPage/>
        </WalletContext.Provider>
    )
}