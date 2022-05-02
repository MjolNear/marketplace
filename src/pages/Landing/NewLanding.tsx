import React from 'react';
import nftsImg from "../../resources/nfts-landing.png";
import Greeting from "./Blocks/Greeting";

const NewLanding = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="w-full"

            >
                <div className="w-full backdrop-blur-2xl bg-opacity-0 p-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="place-self-center ">
                            <Greeting/>
                        </div>
                        <div className="md:max-w-[30%]">
                            <img src={nftsImg} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 col-span-4 mt-12 place-self-start">
                <div className="font-archivo font-bold text-2xl text-blue-500 text-center mb-5">
                    Latest listing
                </div>
                {/*<CardGrid tokens={nfts}*/}
                {/*          loading={loading}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default NewLanding;