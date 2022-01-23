import React, {useEffect} from 'react'
import {collectionAPI} from "./business-logic/near/api/collection";
import NearConnectButton from "./components/Common/buttons/NearConnectButton";
import WalletConnectionPage from "./pages/auth/WalletConnectionPage";
import NavbarContainer from "./pages/navbar/NavbarContainer";
import AppRouter from "./AppRouter";

export default function App() {

    useEffect(() => {
        collectionAPI.fetchNfts('collection-2', 0, 1).then(r => console.log(r))
    })

    return (
        <div>
            {/*<WalletConnectionPage/>*/}
            <NavbarContainer/>
            <AppRouter/>
        </div>
    )
}