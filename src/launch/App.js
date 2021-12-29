import React from 'react'
import NavBarPage from "../components/pages/navbar/NavBarPage";
import AppRouter from "./AppRouter";

export default function App({state}) {
    return (
        <>
            <NavBarPage state={state.navigationBar}/>
            <AppRouter state={state}/>
        </>
    )
}