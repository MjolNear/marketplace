import React from 'react';
import ScrollToTopObserver from "../../hoc/ScrollToTopObserver";
import {ToastContainer} from "react-toastify";
import Footer from "./Footer";
import {PropsWithChildren} from "../types";
import ScrollToTopButton from "../../@ui/Buttons/ScrollToTopButton";
import NavbarLayout from "../../@ui/Navbar/NavbarLayout";

const PageLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <>
            <NavbarLayout/>
            <ScrollToTopObserver/>
            <ScrollToTopButton/>
            <ToastContainer className="mt-24"/>

            <main className="mt-5 mb-10 min-h-[calc(100vh-60px)]">
                {children}
            </main>

            <Footer/>
        </>
    );
};

export default PageLayout;