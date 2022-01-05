import React from 'react'
import AppRouter from "./AppRouter";
import NavbarContainer from "../components/pages/navbar/NavbarContainer";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export default function App() {

    const dispatch = useAppDispatch()
    // const auth = useAppSelector(state => state.a)

    return (
        <div>
            <NavbarContainer/>
            <AppRouter/>
            {/*<FooterPage/>*/}
        </div>
    )
}