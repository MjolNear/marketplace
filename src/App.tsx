import React from 'react'
import AppRouter from "./AppRouter";
import Navbar from "./pages/navbar/Navbar";
import MarketStatsChart from "./components/Stats/Ranking/MarketStatsChart";
import FooterPage from "./pages/footer/FooterPage";


export default function App() {
    return (
        <>
            <Navbar/>
            <div className="pt-[69px] min-h-[calc(100vh-69px)]">
                {/*<MarketStatsChart data={[*/}
                {/*    {volume: 20, dateString: '14 FEB 2022'},*/}
                {/*    {volume: 13, dateString: '15 FEB 2022'},*/}
                {/*    {volume: 29, dateString: '16 FEB 2022'},*/}
                {/*    {volume: 11, dateString: '17 FEB 2022'},*/}
                {/*    {volume: 14, dateString: '18 FEB 2022'},*/}
                {/*    {volume: 17, dateString: '19 FEB 2022'},*/}
                {/*    {volume: 20, dateString: '20 FEB 2022'},*/}
                {/*    {volume: 9, dateString: '21 FEB 2022'},*/}
                {/*]}/>*/}
                <AppRouter/>
            </div>
            <FooterPage/>
        </>
    )
}