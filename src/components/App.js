import React, {Fragment} from 'react'
import MainPart from "./MainPart";
import NavBar from "./navbar/NavBar";


export default function App() {
    return (
        <>
            <Fragment>
                <NavBar/>
                <MainPart/>
            </Fragment>
        </>
    )
}
