import React from 'react';
import Navbar from "../../pages/navbar/Navbar";
import ScrollToTop from "../../hoc/ScrollToTop";
import ScrollToTopButton from "../Common/Buttons/ScrollToTopButton";
import {ToastContainer} from "react-toastify";
import {Outlet} from 'react-router-dom';
import Footer from "./Footer";

const PageLayout: React.FC = () => {
    return (
        <>
            <Navbar/>
            <ScrollToTop/>
            <ScrollToTopButton/>
            <ToastContainer className="mt-24"/>

            <main className="mt-24 min-h-[calc(100vh-96px)] pb-32">
                <Outlet/>
            </main>

            <Footer/>
        </>
    );
};

export default PageLayout;