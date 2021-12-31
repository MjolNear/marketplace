import React from 'react'
import AppRouter from "./AppRouter";
import {NavbarContainer} from "../components/pages/navbar/NavbarContainer";
import FooterPage from "../components/pages/footer/FooterPage";

export default function App({state}) {
    return (
        <div>
            <NavbarContainer/>
            <AppRouter state={state}/>
            <FooterPage/>
        </div>
    )
}