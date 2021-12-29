import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../components/pages/main/MainPage";
import ProfilePage from "../components/pages/profile/ProfilePage";
import ProfileNftCollectionsPage from "../components/pages/profile/collection/ProfileNftCollectionsPage";
import NotFoundPage from "../components/pages/not-found/NotFoundPage";
import CreateCollectionPage from "../components/pages/create/collection/CreateCollectionPage";
import CreateNftPage from "../components/pages/create/nft/CreateNftPage";
import ExploreCollectionsPage from "../components/pages/explore/collection/ExploreCollectionsPage";
import ExploreNftPage from "../components/pages/explore/nft/ExploreNftPage";


const AppRouter = ({state}) => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} key="1"/>
            <Route path="/nft" element={<ExploreNftPage/>} key="2"/>
            <Route path="/collections" element={<ExploreCollectionsPage/>} key="3"/>
            <Route path="/create-nft" element={<CreateNftPage/>} key="4"/>
            <Route path="/create-collection" element={<CreateCollectionPage/>} key="5"/>

            <Route path="/profile-nft" element={<ProfilePage profilePage={state.profile}/>} key="6"/>
            {/*<Route path="/profile-nft/all" element={<Profile/>} key="7"/>*/}
            {/*<Route path="/profile-nft/listed" element={<Profile/>} key="8"/>*/}
            {/*<Route path="/profile-nft/minted" element={<Profile/>} key="9"/>*/}
            {/*<Route path="/profile-nft/history" element={<Profile/>} key="10"/>*/}

            <Route path="/profile-collection" element={<ProfileNftCollectionsPage/>} key="11"/>
            <Route path="*" element={<NotFoundPage/>} key="12"/>
        </Routes>
    );
};

export default AppRouter;