import React from 'react'
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
import ExploreCollectionsPage from "./pages/explore/collection/ExploreCollectionsPage";
import PreviewCollectionPage from "./pages/preview/collection/PreviewCollectionPage";
import CreateNftPage from "./pages/create/nft/CreateNftPage";
import CreateCollectionPage from "./pages/create/collection/CreateCollectionPage";
import ProfileNftsPage from "./pages/profile/nfts/ProfileNftsPage";
import ProfileCollectionsPage from "./pages/profile/collections/ProfileCollectionsPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import ScrollToTopButton from "./components/Common/Buttons/ScrollToTopButton";
import PreviewNftMatchRouterParams from "./pages/preview/nft/PreviewNftMatchRouterParams";
import ScrollToTop from "./hoc/ScrollToTop";
import {ToastContainer} from "react-toastify";
import WithURLInfo from "./hoc/WithURLInfo";
import PageLayout from "./components/Layout/PageLayout";


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
        <HashRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="nfts">
                        <Route index element={<ExploreNftsPage/>}/>
                        <Route path=":contractId/:tokenId" element={<PreviewNftMatchRouterParams/>}/>
                        <Route path="new" element={<CreateNftPage/>}/>
                    </Route>
                    <Route path="collections">
                        <Route index
                               element={<ExploreCollectionsPage/>}/>
                        <Route path=":contractId/:collectionId/:filterTab" element={<PreviewCollectionPage/>}/>
                        <Route path="new" element={<CreateCollectionPage/>}/>
                    </Route>
                    <Route path="profile">
                        <Route path="nfts" element={<ProfileNftsPage/>}/>
                        <Route path="collections" element={<ProfileCollectionsPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}