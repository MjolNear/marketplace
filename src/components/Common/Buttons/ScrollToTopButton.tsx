import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import {FaChevronCircleUp} from 'react-icons/fa'

const ScrollToTopButton: React.FC = () => {
    return (
        <ScrollToTop smooth
                     top={500}
                     component={
                         // <div className="p-2 bg-gray-900 rounded-full">
                             <FaChevronCircleUp size={30} className="fill-gray-900 bg-blue-200 rounded-full"/>
                         // </div>
                     }
                     className="fixed md:bottom-5 bottom-4 right-4 md:right-8 z-[2] cursor-pointer"
        />
    );
};

export default ScrollToTopButton;