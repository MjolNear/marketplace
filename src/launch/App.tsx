import React from 'react'
import AppRouter from "./AppRouter";
import NavbarContainer from "../components/Pages/navbar/NavbarContainer";

export default function App() {
    return (
        <div>
            <NavbarContainer/>
            <AppRouter/>
        </div>
    )
}