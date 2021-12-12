import React from 'react';
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound";
import UserNft from "../pages/UserNft";
import UserNftCollection from "../pages/UserNftCollection";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="my-nft" element={<UserNft/>}/>
            <Route path="my-collection" element={<UserNftCollection/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;