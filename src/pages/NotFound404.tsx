import React from 'react';
import {Link} from "react-router-dom";
import {HiArrowNarrowLeft} from "react-icons/hi";
import GradientText from "../components/Common/Text/GradientText";

const NotFound404Page = React.memo(() => {
    return (
        <div className="flex flex-col font-archivo items-center text-center pt-[35px] lg:pt-[50px] mx-3">
            <div className="font-bold text-[60px]">
                <GradientText text="404"
                              extraClasses="bg-gradient-to-r from-mjol-light-blue to-mjol-dark-blue text-[75px]"
                              fontWeight="extrabold"
                />
                <div>Oops! Page</div>
                <div>not found.</div>
            </div>
            <div className="text-gray-600 mt-2 mb-14 text-xl">
                <p>We've explored deep and wide,</p>
                <p>but we can't find the page you were looking for.</p>
            </div>
            <Link to="/nfts">
                <div className="flex flex-row gap-4 items-center bg-blue-500 px-4 py-3 text-lg text-gray-200
                                font-bold rounded-xl w-fit group hover:text-white hover:drop-shadow-xl"
                >
                    <HiArrowNarrowLeft size={22} className="fill-gray-200 group-hover:fill-white"/>
                    Navigate to market
                </div>
            </Link>
        </div>
    );
});

export default NotFound404Page;