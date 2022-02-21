import React from 'react';
import DarkBlueGradientButton from "../../components/Common/Buttons/DarkBlueGradientButton";
import NearConnectButton from "../../components/Common/Buttons/NearConnectButton";
import DropDownMjolBlueButton from "../../components/Common/Buttons/DropDownMjolBlueButton";
import {Link} from "react-router-dom";
import {signIn} from "../../business-logic/near/enviroment/near";


const BlueGreenGradienButton = (props) => {
    return (
        <Link to={props.link}
              className="w-full h-full inline-flex justify-center py-1.5 px-4 font-bold text-lg font-large rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200 hover:from-green-200 hover:to-mjol-blue-base"
        >
            {props.title}
        </Link>
    )
}

const DarkBlueGradienButton = (props) => {
    return (
        <Link to={props.link}
              className="w-full h-full inline-flex justify-center py-1.5 px-4 font-bold text-lg font-large rounded-md text-white bg-gradient-to-br from-mjol-light-blue to-mjol-blue-base hover:from-mjol-blue-base hover:to-mjol-light-blue"
        >
            {props.title}
        </Link>
    )
}

const GreetingBlock = () => {
    return (
        <div className="">
            <div
                className="text-3xl text-left md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-mjol-blue-base to-green-200 flex-end">
                The Open NFT Marketplace on Near
            </div>
            <div className="text-sm md:text-lg font-mono py-10 font-semibold text-gray-700">
                <label className="underline decoration-sky-500">MjolNear</label> is the first open NFT marketplace on Near blockchain that enables creators from different marketplaces / games / collections to sell their NFTs in one place.
            </div>
            <div className="grid grid-cols-10">
                <div className="col-start-1 col-end-4 md:col-start-1 md:col-end-3">
                    <DarkBlueGradienButton title={"Explore"} link={"/nfts"}/>
                </div>
                <div className="col-start-5 col-end-8 md:col-start-4 md:col-end-6">
                   <BlueGreenGradienButton title={"Create"} link={"/create-nft"}/>
                </div>
            </div>
        </div>
    );
};

export default GreetingBlock;