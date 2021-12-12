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
            <Route path="/" element={<Main/>}/>
            <Route path="/nft" element={<ExploreNFT/>}/>
            <Route path="/collections" element={<ExploreCollections/>}/>
            <Route path="/create-nft" element={<CreateNFT/>}/>
            <Route path="/create-collection" element={<CreateCollection/>}/>
            <Route path="/my-nft" element={<UserNFT/>}/>
            <Route path="/my-collection" element={<UserNFTCollections/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;