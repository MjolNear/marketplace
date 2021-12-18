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
import AllNft from "../pages/profile/nft/AllNft";
import ListedNft from "../pages/profile/nft/ListedNft";
import MintedNft from "../pages/profile/nft/MintedNft";
import History from "../pages/profile/nft/History";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} key="1"/>
            <Route path="/nft" element={<ExploreNFT/>} key="2"/>
            <Route path="/collections" element={<ExploreCollections/>} key="3"/>
            <Route path="/create-nft" element={<CreateNFT/>} key="4"/>
            <Route path="/create-collection" element={<CreateCollection/>} key="5"/>

            <Route path="/profile-nft" element={<Profile/>} key="6"/>
            <Route path="/profile-nft/all" element={<AllNft/>} key="7"/>
            <Route path="/profile-nft/listed" element={<ListedNft/>} key="8"/>
            <Route path="/profile-nft/minted" element={<MintedNft/>} key="9"/>
            <Route path="/profile-nft/history" element={<History/>} key="10"/>

            <Route path="/profile-collection" element={<UserNFTCollections/>} key="11"/>
            <Route path="*" element={<NotFound/>} key="12"/>
        </Routes>
    );
};

export default AppRouter;