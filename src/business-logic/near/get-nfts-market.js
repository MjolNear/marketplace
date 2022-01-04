import getConfig from "./config";
import {utils} from 'near-api-js'
import {getConvertedNFT} from "./nft-converter";
import {NftAPI} from "./get-utils";

const nearConfig = getConfig('mainnet');


export async function getNftPricesByUser(account, accountId) {
    let res = {};
    try {
        return account.viewFunction(nearConfig.contractName, 'get_user_nfts', {
            owner_id: accountId,
        }).then((vec) => {
                for (let pairIdAndPrice of vec) {
                    const price = pairIdAndPrice[1].toLocaleString('fullwide', {useGrouping: false});
                    res[pairIdAndPrice[0]] = utils.format.formatNearAmount(price)
                }
                return res
            }
        ).catch((e) => {
            console.log("Get user NFT prices error", e);
            return res
        });
    } catch (e) {
        console.log("Connection Error when get user NFT prices", e);
        return res
    }
}

async function getMarketNftsPrices(account, from, limit) {
    let res = [];
    try {
        return account.viewFunction(nearConfig.contractName, 'get_nfts', {
            from: from,
            limit: limit
        }).catch((e) => {
            console.log("Get market NFTs error", e);
            return res
        })
    } catch (e) {
        console.log("Connection Error when get market NFTs", e);
        return res
    }
}

async function getNFT(account, contractId, tokenId, price) {
    try {
        return account.viewFunction(contractId, 'nft_token', {
            token_id: tokenId
        }).then((res) => {
                return getConvertedNFT(account,
                    contractId,
                    res,
                    {[contractId + ":" + tokenId]: utils.format.formatNearAmount(price.toString())})
            }
        ).catch((e) => {
            console.log("Get solo NFT error", e);
            return null
        })
    } catch (e) {
        console.log("Connection Error when get solo NFT", e);
        return null
    }
}

export async function getMarketNfts(accountId, from = 0, limit = 10) {
    const account = NftAPI.buildAccountInfo(accountId)
    const marketNfts = await getMarketNftsPrices(account, from, limit);
    let resNFTs = [];
    for (let marketNft of marketNfts) {
        resNFTs.push(getNFT(account, marketNft.nft_contract_id, marketNft.token_id, marketNft.price))
    }
    return resNFTs
}

