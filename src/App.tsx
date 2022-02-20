import React from 'react'
import AppRouter from "./AppRouter";
import Navbar from "./pages/navbar/Navbar";
import ScrollToTop from "./hoc/ScrollToTop";

export default function App() {
    return (
        <ScrollToTop>
            <Navbar/>
            <div className="pt-[69px] min-h-[calc(100vh-69px)]">
                <AppRouter/>
            </div>
        </ScrollToTop>
    )
}