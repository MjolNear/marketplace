import React from 'react'
import AppRouter from "./AppRouter";
import NavbarContainer from "../components/pages/navbar/NavbarContainer";
import {Environment, version} from "../environment";

export default function App() {

    let publicURL: string = ''
    switch (version) {
        case Environment.Dev:
            publicURL = ''
            break
        case Environment.Production:
            publicURL = 'mjolnear.github.io'
            break
    }

    return (
        <div>
            <NavbarContainer/>
            <AppRouter/>
            {/*<FooterPage/>*/}
        </div>
    )
}