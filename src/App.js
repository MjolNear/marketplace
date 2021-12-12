import React from 'react'
import AppRouter from "./router/AppRouter";
import NavBar from "./components/navbar/NavBar";

export default function App() {
    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}