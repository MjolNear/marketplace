import {NFT} from "../utils/classes";

export async function mockNFTs(hasError) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (hasError) {
                reject(new Error("MockError getNfts"));
            }
            console.log("NFTS");
            resolve([
                new NFT("Common NFT",
                    "userpuser.testnet",
                    'token-1',
                    'https://media.giphy.com/media/RJy4FQlLbxDz4kJ6GF/giphy.gif'),
                new NFT("Crypto Punk",
                    "userpuser.testnet",
                    'token-3',
                    'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif'),
                new NFT("Moon",
                    "userpuser.testnet",
                    'token-2',
                    'https://media.giphy.com/media/RJy4FQlLbxDz4kJ6GF/giphy.gif'),
            ]);
        }, 0))
}
