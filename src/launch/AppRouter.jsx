import React from 'react';
import {Route, Routes} from "react-router";
import MainPage from "../components/pages/main/MainPage";
import ProfileNftCollectionsPage from "../components/pages/profile/collection/ProfileNftCollectionsPage";
import NotFoundPage from "../components/pages/not-found/NotFoundPage";
import CreateCollectionPage from "../components/pages/create/collection/CreateCollectionPage";
import CreateNftPage from "../components/pages/create/nft/CreateNftPage";
import ExploreCollectionsPage from "../components/pages/explore/collection/ExploreCollectionsPage";
import ExploreNftPage from "../components/pages/explore/nft/ExploreNftPage";
import ProfilePageHOC from "../hoc/profile/ProfilePageHOC";
import PreviewNftHoc from "../hoc/preview/nft/PreviewNftHoc";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} key="1"/>
            <Route path="/nft" element={<ExploreNftPage/>} key="2"/>
            <Route path="/nft/:contractId/:tokenId" element={<PreviewNftHoc/>} key="30"/>
            <Route path="/collections" element={<ExploreCollectionsPage/>} key="3"/>
            <Route path="/create-nft" element={<CreateNftPage/>} key="4"/>
            <Route path="/create-collection" element={<CreateCollectionPage/>} key="5"/>
            <Route path="/profile/nfts" element={<ProfilePageHOC/>} key="6"/>
            <Route path="/profile-collection" element={<ProfileNftCollectionsPage/>} key="11"/>
            <Route path="*" element={<NotFoundPage/>} key="12"/>
        </Routes>
    );
};

export default AppRouter;