import React from 'react';
import {Route, Routes} from "react-router-dom";

import UserNFT from "../pages/UserNFT";
import UserNFTCollections from "../pages/UserNFTCollections";
import ExploreNFT from "../pages/ExploreNFTs";
import ExploreCollections from "../pages/ExploreCollections";
import NotFound from "../pages/NotFound";
import CreateNFT from "../pages/CreateNFT";
import CreateCollection from "../pages/CreateCollection";
import Main from "../pages/Main";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} key="1"/>
            <Route path="/nft" element={<ExploreNFT/>} key="2"/>
            <Route path="/collections" element={<ExploreCollections/>} key="3"/>
            <Route path="/create-nft" element={<CreateNFT/>} key="4"/>
            <Route path="/create-collection" element={<CreateCollection/>} key="5"/>
            <Route path="/my-nft" element={<UserNFT/>} key="6"/>
            <Route path="/my-collection" element={<UserNFTCollections/>} key="7"/>
            <Route path="*" element={<NotFound/>} key="8"/>
        </Routes>
    );
};

export default AppRouter;