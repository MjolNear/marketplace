// import {getConfig} from "../near2/near/enviroment/config";
// import {utils} from 'near-near2-js'
// import {getConvertedNFT} from "./nft-converter";
// import {NftAPI} from "./get-utils";
// import {NetworkEnv} from "../near2/near/enviroment/network";
//
// const nearConfig = getConfig(NetworkEnv.MAINNET);
//
//
// export async function getNftPricesByUser(account, accountId) {
//     let res = {};
//     try {
//         return account.viewFunction(nearConfig.contractName, 'get_user_nfts', {
//             owner_id: accountId,
//         }).then((vec) => {
//                 for (let pairIdAndPrice of vec) {
//                     const price = pairIdAndPrice[1].toLocaleString('fullwide', {useGrouping: false});
//                     res[pairIdAndPrice[0]] = utils.format.formatNearAmount(price)
//                 }
//                 return res
//             }
//         ).catch((e) => {
//             console.log("Get user NFT prices error", e);
//             return res
//         });
//     } catch (e) {
//         console.log("Connection Error when get user NFT prices", e);
//         return res
//     }
// }
//
// async function getMarketNftsPrices(account, from, limit) {
//     let res = [];
//     try {
//         return account.viewFunction(nearConfig.contractName, 'get_nfts', {
//             from: from,
//             limit: limit
//         }).catch((e) => {
//             console.log("Get transaction NFTs error", e);
//             return res
//         })
//     } catch (e) {
//         console.log("Connection Error when get transaction NFTs", e);
//         return res
//     }
// }
//
// async function getNFT(account, contractId, tokenId, price) {
//     const response = await account.viewFunction(contractId, 'nft_token', {
//         token_id: tokenId
//     })
//     return getConvertedNFT(
//         account,
//         contractId,
//         response,
//         {
//             [contractId + ":" + tokenId]: utils.format.formatNearAmount(price.toString())
//         }
//     )
// }
//
// export async function getMarketNfts(accountId, from = 0, limit = 10) {
//     const account = NftAPI.buildAccountInfo(accountId)
//     const marketNfts = await getMarketNftsPrices(account, from, limit);
//     let resNFTs = [];
//     for (let marketNft of marketNfts) {
//
//         const contractId = marketNft.nft_contract_id
//         const tokenId = marketNft.token_id
//         const price = marketNft.price
//
//         const response = await account.viewFunction(contractId, 'nft_token', {
//             token_id: tokenId
//         })
//
//         const nftPromise = getConvertedNFT(
//             account,
//             contractId,
//             response,
//             {
//                 [contractId + ":" + tokenId]: utils.format.formatNearAmount(price.toString())
//             }
//         )
//         resNFTs.push(nftPromise)
//     }
//     return resNFTs
// }
//
export const y = 'y'