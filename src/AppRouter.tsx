import React from 'react';
import {Route, Routes} from "react-router";
import LandingPage from "./pages/landing/LandingPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import CreateCollectionPage from "./pages/create/collection/CreateCollectionPage";
import CreateNftPage from "./pages/create/nft/CreateNftPage";
import ExploreCollectionsPage from "./pages/explore/collection/ExploreCollectionsPage";
import PreviewNftPage from "./pages/preview/nft/PreviewNftPage";
import Logout from "./hoc/auth/Logout";
import ExploreNftsPage from "./pages/explore/nft/ExploreNftsPage";
import ProfileCollectionsPage from "./pages/profile/collections/ProfileCollectionsPage";
import ProfileNftsPage from "./pages/profile/nfts/ProfileNftsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="nfts" element={<ExploreNftsPage/>}/>
            <Route path="nft/:contractId/:tokenId" element={<PreviewNftPage/>}/>
            <Route path="collections" element={<ExploreCollectionsPage/>}/>

            <Route path="create-nft" element={<CreateNftPage/>}/>
            <Route path="create-collection" element={<CreateCollectionPage/>}/>

            {/*<Route path="profile/">*/}
            <Route path="profile/nfts" element={<ProfileNftsPage/>}/>
            <Route path="profile/collections" element={<ProfileCollectionsPage/>}/>
            {/*</Route>*/}

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;



