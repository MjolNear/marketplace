import React from 'react'
import AppRouter from "./AppRouter";
import Navbar from "./pages/navbar/Navbar";
import FooterPage from "./pages/footer/FooterPage";
import MarketStats from "./components/Stats/Ranking/MarketStats";


export default function App() {
    return (
        <>
            <Navbar/>
            <div className="pt-[69px] min-h-[calc(100vh-69px)]">
                {/*<MarketStats/>*/}
                <AppRouter/>
            </div>
            <FooterPage/>
        </>
    )
}