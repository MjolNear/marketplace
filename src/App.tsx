import React, {useEffect} from 'react'
import {collectionAPI} from "./business-logic/near/api/collections";
import NearConnectButton from "./components/Common/buttons/NearConnectButton";
import WalletConnectionPage from "./pages/auth/WalletConnectionPage";
import NavbarContainer from "./pages/navbar/NavbarContainer";
import AppRouter from "./AppRouter";

export default function App() {

    useEffect(() => {
        collectionAPI.fetchUserCollections('danielto.near').then(console.log)
    })

    return (
        <div>
            {/*<WalletConnectionPage/>*/}
            <NavbarContainer/>
            <AppRouter/>
        </div>
    )
}