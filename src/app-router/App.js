import React from 'react'
import NavBarPage from "../react-components/pages/navbar/NavBarPage";
import AppRouter from "./AppRouter";

export default function App({state}) {
    return (
        <>
            <NavBarPage state={state.navigationBar}/>
            {/*<PreviewNft nft={mockNFTs()[4]}/>*/}
            <AppRouter state={state}/>
        </>
    )
}