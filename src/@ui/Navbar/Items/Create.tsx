import React from 'react';
import {NavbarMenu, NavbarMenuItem} from "../Common";
import {GiPaintBrush, GiPalette} from "react-icons/gi";


const Create = () => {

    const items = [
        {name: 'NFT', path: '/nfts/new', icon: <GiPaintBrush size={20} className="fill-blue-500"/>},
        {name: 'Collection', path: '/collections/new', icon: <GiPalette size={20} className="fill-blue-500"/>}
    ]

    return (
        <NavbarMenu name="Create" align="left">
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

export default Create;