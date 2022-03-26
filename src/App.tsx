import React from 'react'
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
import NotFound404Page from "./pages/NotFound404";
import PreviewNftMatchRouterParams from "./pages/preview/nft/PreviewNftMatchRouterParams";
import PageLayout from "./components/Layout/PageLayout";


export default function App() {
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
                        <Route path=":contractId/:collectionId/:filterTab"
                               element={<PreviewCollectionPage/>}/>
                        <Route path="new" element={<CreateCollectionPage/>}/>
                    </Route>
                    <Route path="profile">
                        <Route path="nfts" element={<ProfileNftsPage/>}/>
                        <Route path="collections" element={<ProfileCollectionsPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound404Page/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}