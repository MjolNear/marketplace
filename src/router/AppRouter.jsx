import React from 'react';
import {Route, Routes} from "react-router-dom";
import UserNFTCollections from "../pages/UserNFTCollections";
import ExploreNFT from "../pages/ExploreNFTs";
import ExploreCollections from "../pages/ExploreCollections";
import NotFound from "../pages/NotFound";
import CreateNFT from "../pages/CreateNFT";
import CreateCollection from "../pages/CreateCollection";
import Main from "../pages/Main";
import Profile from "../pages/profile/Profile";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} key="1"/>
            <Route path="/nft" element={<ExploreNFT/>} key="2"/>
            <Route path="/collections" element={<ExploreCollections/>} key="3"/>
            <Route path="/create-nft" element={<CreateNFT/>} key="4"/>
            <Route path="/create-collection" element={<CreateCollection/>} key="5"/>

            <Route path="/profile-nft" element={<Profile/>} key="6"/>
            <Route path="/profile-nft/all" element={<Profile/>} key="7"/>
            <Route path="/profile-nft/listed" element={<Profile/>} key="8"/>
            <Route path="/profile-nft/minted" element={<Profile/>} key="9"/>
            <Route path="/profile-nft/history" element={<Profile/>} key="10"/>

            <Route path="/profile-collection" element={<UserNFTCollections/>} key="11"/>
            <Route path="*" element={<NotFound/>} key="12"/>
        </Routes>
    );
};

export default AppRouter;