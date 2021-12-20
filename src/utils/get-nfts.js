import {convertStandardNFT, getJsonByURL, getMintbaseNFT} from "./nft-converter";

const nearApi = require("near-api-js");


async function getNFTsByContractAndAccount(account, contractId, accountId) {
    const limit = 20;
    let allNfts = [], curNfts = [];
    do {
        try {
            curNfts = await account.viewFunction(contractId, 'nft_tokens_for_owner', {
                account_id: accountId,
                from_index: allNfts.length.toString(),
                limit: limit
            });
        } catch (e) {
            break
        }
        allNfts = allNfts.concat(curNfts);
    } while (curNfts.length >= limit);

    return allNfts;
}

async function getNftInfo(account, contractId, nft) {
    if (contractId.substr(-14) === 'mintbase1.near') {
        return getMintbaseNFT(account, contractId, nft)
    }
    return convertStandardNFT(contractId, nft)
}


export async function getNFTs(accountId) {
    const accountURL = 'https://helper.' + (accountId.substr(-5) === '.near' ? 'mainnet' : 'testnet')
        + '.near.org/account/' + accountId + '/likelyNFTs';
    const nftContracts = await getJsonByURL(accountURL);
    const network = accountId.substr(-5) === '.near' ? 'mainnet' : 'testnet';
    const provider = new nearApi.providers.JsonRpcProvider('https://rpc.' + network + '.near.org');
    const account = new nearApi.Account({provider: provider});

    if (nftContracts.error) {
        console.log("ERROR");
        return []
    }
    let resNFTs = [];
    for (let contractId of nftContracts) {
        const nfts = await getNFTsByContractAndAccount(account, contractId, accountId);
        for (let nft of nfts) {
            resNFTs.push(getNftInfo(account, contractId, nft))
        }
    }

    return resNFTs
}
