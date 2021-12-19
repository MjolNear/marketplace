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
            '2',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            4,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT('1',
            '3',
            'x.near',
            "Cock",
            "Fruit cock collections",
            4,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT(
            '1',
            '4',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            3,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT('1',
            '5',
            'x.near',
            "Cock",
            "Fruit cock collections",
            3,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT(
            '1',
            '6',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            3,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT(
            '1',
            '7',
            'x.near',
            "Cock",
            "Fruit cock collection",
            3,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT('1',
            '8',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            'token-3',
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'
        ),
        new NFT(
            '1',
            '9',
            'x.near',
            "Very very very long Cock name",
            "Fruit cock collection",
            'token-3',
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT(
            '1',
            '10',
            'x.near',
            "Very very very long Cock name",
            "Fruit cock collection",
            'token-3',
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ), new NFT(
            '1',
            '11',
            'x.near',
            "Cock name",
            "Fruit cock collection",
            'token-3',
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
    ]

    return (
        <div className="bg-transparent m-5 sm:m-8">
            <NftCollectionContainer>
                {nfts.map(nft =>
                    <NftItem key={nft.token_id}
                             nft={nft}/>
                )}
            </NftCollectionContainer>
        </div>
    );
};

export default UserNFT;