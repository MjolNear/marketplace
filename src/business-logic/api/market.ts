// import getConfig from "../near/config";
import {utils} from "near-api-js";
import {NetworkEnv} from "./near/enviroment/network";

// const nearConfig = getConfig(NetworkEnv.MAINNET);

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