import React from 'react';
import {GiPaintBrush, GiPalette} from "react-icons/gi";
import {NavbarMenu, NavbarMenuItem} from "../Common";
import {AiOutlineAppstore} from "react-icons/ai";
import {MdCollections} from "react-icons/md";

const Explore = () => {
    const items = [
        {name: 'NFTs', path: '/nfts', icon: <AiOutlineAppstore size={20} className="fill-blue-500"/>},
        {name: 'Collections', path: '/collections', icon: <MdCollections size={20} className="fill-blue-500"/>},
    ]

    return (
        <NavbarMenu name="Explore" align="left">
            {items.map(item =>
                <NavbarMenuItem key={item.path + item.name}
                                path={item.path}
                                icon={item.icon}
                                name={item.name}
                />
            )}
        </NavbarMenu>
    );
};

export default Explore;