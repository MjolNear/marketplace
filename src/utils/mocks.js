import {NFT} from "./classes.js";


export async function getNfts(hasError) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (hasError){
                reject(new Error("MockError getNfts"));
            }
            console.log("NFTS");
            resolve ([
                 new NFT("Common NFT",
                     "userpuser.testnet",
                     'token-1',
                     'https://media.giphy.com/media/RJy4FQlLbxDz4kJ6GF/giphy.gif'),
                 new NFT("Rare NFT",
                     "userpuser.testnet",
                     'token-3',
                     'https://media.giphy.com/media/RJy4FQlLbxDz4kJ6GF/giphy.gif'),
                 new NFT("Legendary NFT",
                     "userpuser.testnet",
                     'token-2',
                     'https://media.giphy.com/media/RJy4FQlLbxDz4kJ6GF/giphy.gif'),
            ]);
        }, 0))
}


export async function getMintedNumber() {
    setTimeout(() => {
        return 3;
    }, 500)
}

