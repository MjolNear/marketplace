import React from 'react';
import {NFT} from "../utils/classes";
import NftCollectionContainer from "../components/nfts/NftCollectionContainer";
import NftItem from "../components/nfts/NftItem";

const UserNFT = () => {
    const nfts = [
        new NFT('1',
            '1',
            'x.near',
            "Cock#1",
            "Fruit cock collections",
            1,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT('1',
            '1',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            4,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT('1',
            '1',
            'x.near',
            "Cock",
            "Fruit cock collections",
            4,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT(
            '1',
            '1',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            3,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT('1',
            '1',
            'x.near',
            "Cock",
            "Fruit cock collections",
            3,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT(
            '1',
            '1',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            3,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT(
            '1',
            '1',
            'x.near',
            "Cock",
            "Fruit cock collection",
            3,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT('1',
            '1',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            'token-3',
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'
        ),
        new NFT(
            '1',
            '1',
            'x.near',
            "Cock",
            "Fruit cock collection",
            'token-3',
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
    ]

    return (
        <div className="bg-white">
            <NftCollectionContainer>
                {nfts.map(nft =>
                    <NftItem nft={nft} key={nft.title}/>
                )}
            </NftCollectionContainer>
        </div>
    );
};

export default UserNFT;