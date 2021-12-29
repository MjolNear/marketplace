import {NFT} from "../models/NFT";

export default function mockNFTs() {
    return [
        new NFT('1',
            '1',
            'x.near',
            "Cock#1",
            "Fruit cock collections",
            1,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT('1',
            '2',
            'x.near',
            "Crypto Punk",
            "Crypto punk collection",
            4,
            null,
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'
        ),
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
            'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'
        ),
        new NFT('1',
            '5',
            'x.near',
            "Long long Long long Long long Long long Long long Long long Long long name",
            "Fruit cock collections",
            3,
            null,
            'https://media.giphy.com/media/xxBBZgE1XpreXSsNPz/giphy.gif'
        ),
        new NFT(
            '1',
            '12',
            'x.near',
            "Pandas Punk",
            "Fruit cock collection",
            'token-3',
            null,
            'https://adtechexplained.com/content/images/2021/09/NFT-featured-2.jpg'
        ),
        new NFT(
            '1',
            '13',
            'x.near',
            "Astronaut",
            "Fruit cock collection",
            'token-3',
            null,
            'https://res.cloudinary.com/detbtewim/image/upload/v1633539444/merlin_184196631_939fb22d-b909-4205-99d9-b464fb961d32-superJumbo.jpg'
        ),
        new NFT(
            '1',
            '14',
            'x.near',
            "Future world",
            "Fruit cock collection",
            'token-3',
            null,
            'https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg-900x510.jpg'
        ),
        new NFT(
            '1',
            '15',
            'x.near',
            "Mona Lisa",
            "Fruit cock collection",
            'token-3',
            null,
            'https://i.guim.co.uk/img/media/3c90fbf9666d4e73be1122eb33afed235db41b1f/0_0_5000_3000/master/5000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=3f8c0729394152d5c02098a0eb76defb'
        ),
    ];
}