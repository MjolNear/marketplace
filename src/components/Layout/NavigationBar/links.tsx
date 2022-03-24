import {MdCollections} from "react-icons/md";
import {ImFilePicture} from 'react-icons/im'
import {GiPalette, GiPaintBrush} from 'react-icons/gi'

import React from "react";

export interface TabItem {
    name: string,
    path: string,
    icon?: React.ReactNode
}

export const links: Record<string, TabItem[]> = {
    explore: [
        {name: 'NFTs', path: '/nfts', icon: <ImFilePicture size={20}/>},
        {name: 'Collections', path: '/collections', icon: <MdCollections size={20}/>},
    ],
    create: [
        {name: 'NFT', path: '/nfts/new', icon: <GiPaintBrush size={20}/>},
        {name: 'Collection', path: '/collections/new', icon: <GiPalette size={20}/>}
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