import React, {useEffect} from 'react'
import NavbarContainer from "./pages/navbar/NavbarContainer";
import AppRouter from "./AppRouter";
import {collectionAPI} from "./business-logic/near/api/collections";

export default function App() {

    useEffect(() => {
        collectionAPI.fetchCollections(0, 20).then(
            console.log
        )
    })

    return (
        <div>
            {/*<WalletConnectionPage/>*/}
            <NavbarContainer/>
            <AppRouter/>
        </div>
    )
}