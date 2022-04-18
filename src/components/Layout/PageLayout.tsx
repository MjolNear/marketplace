import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import ScrollToTop from "../../hoc/ScrollToTop";
import ScrollToTopButton from "../Common/Buttons/ScrollToTopButton";
import {ToastContainer} from "react-toastify";
import Footer from "./Footer";
import {PropsWithChildren} from "../types";

const PageLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <>
            <NavigationBar/>
            <ScrollToTop/>
            <ScrollToTopButton/>
            <ToastContainer className="mt-24"/>

            <main className="mt-24 min-h-[calc(100vh-96px)] pb-32">
                {children}
            </main>

            <Footer/>
        </>
    );
};

export default PageLayout;