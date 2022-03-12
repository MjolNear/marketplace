import React, {useEffect, useReducer} from 'react'
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
import {HashRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import LandingPage from "./pages/landing/LandingPage";
import ExploreNftsPage from "./pages/explore/nft/ExploreNftsPage";
import PreviewNftPage from "./pages/preview/nft/PreviewNftPage";
import ExploreCollectionsPage from "./pages/explore/collection/ExploreCollectionsPage";
import PreviewCollectionPage from "./pages/preview/collection/PreviewCollectionPage";
import CreateNftPage from "./pages/create/nft/CreateNftPage";
import CreateCollectionPage from "./pages/create/collection/CreateCollectionPage";
import ProfileNftsPage from "./pages/profile/nfts/ProfileNftsPage";
import ProfileCollectionsPage from "./pages/profile/collections/ProfileCollectionsPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";


export default function App() {

    // const signedInStateReducer = (
    //     state: { isSignedIn: boolean, accountId?: string },
    //     action: { type: 'signIn' | 'signOut' }
    // ) => {
    //     switch (action.type) {
    //         case 'signIn':
    //             return {
    //                 isSignedIn: true,
    //                 accountId: undefined
    //             };
    //         case 'signOut':
    //             return {
    //                 isSignedIn: false,
    //             };
    //     }
    // };
    //
    // const SignedInStateReducer = useReducer(signedInStateReducer, {
    //     isSignedIn: false,
    // });
    //
    // const [signedInState, signedInStateDispatch] = SignedInStateReducer;
    //
    //
    // useEffect(() => {
    //     if (webWallet.isSignedIn()) {
    //         signedInStateDispatch({type: 'signIn'});
    //     }
    // }, [webWallet.isSignedIn()]);
    //
    //
    // useEffect(() => {
    //     console.log('trigerred')
    //     const windowRef = window as any
    //     setTimeout(() => {
    //         if (windowRef.near) {
    //             windowRef.near.on('signIn', () => {
    //                 saveSenderLoginRes();
    //                 signedInStateDispatch({type: 'signIn'});
    //             });
    //             windowRef.near.on('accountChanged', (changedAccountId: string) => {
    //                 window.location.reload();
    //                 saveSenderLoginRes(changedAccountId);
    //             });
    //             windowRef.near.on('signOut', () => {
    //                 removeSenderLoginRes();
    //                 signedInStateDispatch({type: 'signOut'});
    //             });
    //         }
    //
    //         const signedInRes = localStorage.getItem(
    //             SENDER_WALLET_SIGNED_IN_STATE_KEY
    //         );
    //
    //         if (windowRef.near && signedInRes && !configureSenderWallet(window)?.isSignedIn()) {
    //             configureSenderWallet(window)
    //                 ?.requestSignIn()
    //                 .then(() => {
    //                     saveSenderLoginRes();
    //                 });
    //         }
    //     }, 200);
    // }, [window, (window as any)?.near]);

    return (
        // <WalletContext.Provider value={{signedInState, signedInStateDispatch}}>
            <HashRouter>
                <Navbar/>
                <div className="pt-[69px] min-h-[calc(100vh-69px)]">
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="nfts" element={<ExploreNftsPage/>}/>
                        <Route path="nfts/:contractId/:tokenId" element={<PreviewNftPage/>}/>
                        <Route path="collections" element={<ExploreCollectionsPage/>}/>
                        <Route path="collections/:contractId/:collectionId/:filterTab"
                               element={<PreviewCollectionPage/>}/>
                        <Route path="create-nft" element={<CreateNftPage/>}/>
                        <Route path="create-collection" element={<CreateCollectionPage/>}/>
                        <Route path="profile/nfts" element={<ProfileNftsPage/>}/>
                        <Route path="profile/collections" element={<ProfileCollectionsPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
                <FooterPage/>
            </HashRouter>
         // </WalletContext.Provider>
    )
}