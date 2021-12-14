import React from 'react';
import {NFT} from "../utils/classes";
import NftCollectionContainer from "../components/nfts/NftCollectionContainer";
import NftItem from "../components/nfts/NftItem";

const UserNFT = () => {
    const nfts = [
        new NFT("Cock#1",
            "userpuser.testnet",
            'token-1',
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT("Crypto Punk",
            "userpuser.testnet",
            'token-3',
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT("Cock",
            "userpuser.testnet",
            'token-1',
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT("Crypto Punk",
            "userpuser.testnet",
            'token-3',
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT("Cock",
            "userpuser.testnet",
            'token-1',
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT("Crypto Punk",
            "userpuser.testnet",
            'token-3',
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT("Cock",
            "userpuser.testnet",
            'token-1',
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT("Crypto Punk",
            "userpuser.testnet",
            'token-3',
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT("Cock",
            "userpuser.testnet",
            'token-1',
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT("Crypto Punk",
            "userpuser.testnet",
            'token-3',
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
        new NFT("Cock",
            "userpuser.testnet",
            'token-1',
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'),
        new NFT("Crypto Punk",
            "userpuser.testnet",
            'token-3',
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
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