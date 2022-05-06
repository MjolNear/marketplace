import React from 'react';
import {NavbarSingleButton} from "../Common";
import {IoIosRocket} from "react-icons/io";
import Tooltip from "../../../components/Layout/Tooltip";

const Launchpad = () => {
    return (
        <NavbarSingleButton>
            <p className="text-transparent bg-clip-text font-archivo bg-gradient-to-r
                          from-mjol-blue-base to-blue-600 group-hover:text-blue-500 text-md
                          font-archivo font-bold opacity-50"
               data-tip="Coming soon!"
               data-for="launchpadTooltip"
            >
                Launchpad
            </p>
            <IoIosRocket size={18} className="fill-blue-500 opacity-50"/>
            <Tooltip id="launchpadTooltip" place="bottom"/>
        </NavbarSingleButton>
    );
};

export default Launchpad;