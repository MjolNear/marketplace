import {MdCollections} from "react-icons/md";
import {AiOutlineAppstore} from 'react-icons/ai'
import {GiPalette, GiPaintBrush} from 'react-icons/gi'

import React from "react";

export interface TabItem {
    name: string,
    path: string,
    icon?: React.ReactNode
}

export const routesConfig: Record<string, TabItem[]> = {
    explore: [
        {name: 'NFTs', path: '/nfts', icon: <AiOutlineAppstore size={20} className="fill-blue-500"/>},
        {name: 'Collections', path: '/collections', icon: <MdCollections size={20} className="fill-blue-500"/>},
    ],
    create: [
        {name: 'NFT', path: '/nfts/new', icon: <GiPaintBrush size={20} className="fill-blue-500"/>},
        {name: 'Collection', path: '/collections/new', icon: <GiPalette size={20} className="fill-blue-500"/>}
    ],
    profile: [
        {name: 'My NFTs', path: '/profile/nfts'},
        {name: 'My Collections', path: '/profile/collections'},
        {name: 'Sign out', path: '/logout'}
    ],
    single: [
        {name: 'Launchpad', path: '/launchpad'},
        {name: 'Docs', path: '/docs'}
    ]
}