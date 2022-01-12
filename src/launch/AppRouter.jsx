import React from 'react';
import {Route, Routes} from "react-router";
import LandingPage from "../components/pages/landing/LandingPage";
import NotFoundPage from "../components/pages/not-found/NotFoundPage";
import CreateCollectionPage from "../components/pages/create/collection/CreateCollectionPage";
import CreateNftPage from "../components/pages/create/nft/CreateNftPage";
import ExploreCollectionsPage from "../components/pages/explore/collection/ExploreCollectionsPage";
import ProfilePageHoc from "../hoc/profile/ProfilePageHoc";
import PreviewNftHoc from "../hoc/preview/nft/PreviewNftPageHoc";
import Logout from "../hoc/auth/Logout";
import ExploreNftsPageHoc from "../hoc/explore/nft/ExploreNftsPageHoc";
import {signOut} from "../business-logic/near2/near/setup/near";

const AppRouter = () => {
    const PUBLIC_URL = 'mjolnear.github.io'

    return (
        <Routes>
            <Route path={PUBLIC_URL + "/"} exact element={<LandingPage/>} key="1"/>
            <Route path={PUBLIC_URL + "/logout"} exact element={<Logout logout={signOut}/>}/>
            <Route path={PUBLIC_URL + "/nfts"} exact element={<ExploreNftsPageHoc/>} key="2"/>
            <Route path={PUBLIC_URL + "/nft/:contractId/:tokenId"} exact element={<PreviewNftHoc/>} key="30"/>
            <Route path={PUBLIC_URL + "/collections"} element={<ExploreCollectionsPage/>} key="3"/>
            <Route path={PUBLIC_URL + "/create-nft"} element={<CreateNftPage/>} key="4"/>
            <Route path={PUBLIC_URL + "/create-collection"} element={<CreateCollectionPage/>} key="5"/>
            <Route path={PUBLIC_URL + "/profile/nfts"} element={<ProfilePageHoc/>} key="6"/>
            {/*<Route path="/profile-collection" element={<ProfileNftCollectionsPage/>} key="11"/>*/}
            <Route path="*" element={<NotFoundPage/>} key="12"/>
        </Routes>
    );
};

export default AppRouter;



