import React from 'react'
import AppRouter from "./AppRouter";
import NavbarContainer from "./pages/navbar/NavbarContainer";
import ConnectWalletButton from "./components/Preview/Status/connect-wallet/ConnectWalletButton";
import ConnectWithNearButton from "./components/Common/buttons/Connect/ConnectWithNearButton";

export default function App() {
    return (
        <div>
            {/*<ConnectWithNearButton/>*/}
            <NavbarContainer/>
            <AppRouter/>
        </div>
    )
}