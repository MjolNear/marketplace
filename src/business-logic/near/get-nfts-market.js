import {getConfig} from "../near2/near/enviroment/config";
import {utils} from 'near-api-js'
import {getConvertedNFT} from "./nft-converter";
import {NftAPI} from "./get-utils";
import {NetworkEnv} from "../near2/near/enviroment/network";
import {contract} from '../near2/near/setup/near'

const nearConfig = getConfig(NetworkEnv.MAINNET);


function formatPrice(x) {
    const price = x.toLocaleString('fullwide', {useGrouping: false});
    return utils.format.formatNearAmount(price)
}

export async function getNftPriceByTokenUID(contractId, tokenId) {
    const nft_uid = contractId + ":" + tokenId;
    try {
        return contract.get_nft_price({
            nft_uid: nft_uid,
        }).then((price) => {
                if (price === 0){
                    return {}
                }
                return {[nft_uid] : formatPrice(price)}
            }
        ).catch((e) => {
            console.log("Get NFT price error", e);
            return {}
        });
    } catch (e) {
        console.log("Connection Error when get NFT price", e);
        return {}
    }
}

export async function getNftPricesByUser(accountId) {
    let res = {};
    try {
        return contract.get_user_nfts({
            owner_id: accountId,
        }).then((vec) => {
                for (let pairIdAndPrice of vec) {
                    res[pairIdAndPrice[0]] = formatPrice(pairIdAndPrice[1])
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
        return contract.get_nfts({
            from: from,
            limit: limit
        }).catch((e) => {
            console.log("Get transaction NFTs error", e);
            return res
        })
    } catch (e) {
        console.log("Connection Error when get transaction NFTs", e);
        return res
    }
}

async function getNFT(account, contractId, tokenId, price) {
    const response = await account.viewFunction(contractId, 'nft_token', {
        token_id: tokenId
    })
    return getConvertedNFT(
        account,
        contractId,
        response,
        {
            [contractId + ":" + tokenId]: formatPrice(price)
        }
    )
}

export async function getMarketNfts(accountId, from = 0, limit = 10) {
    const account = NftAPI.buildAccountInfo(accountId)
    const marketNfts = await getMarketNftsPrices(account, from, limit);
    let resNFTs = [];
    for (let marketNft of marketNfts) {

        const contractId = marketNft.nft_contract_id
        const tokenId = marketNft.token_id
        const price = marketNft.price

        const response = await account.viewFunction(contractId, 'nft_token', {
            token_id: tokenId
        })

        const nftPromise = getConvertedNFT(
            account,
            contractId,
            response,
            {
                [contractId + ":" + tokenId]: formatPrice(price)
            }
        )
        resNFTs.push(nftPromise)
    }
    return resNFTs
}

