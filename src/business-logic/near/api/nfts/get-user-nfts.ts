import {getConvertedNFT} from "../standardization";
import {nftAPI} from "./api";
import {marketAPI} from "../market";
import {AccountId, ContractId, TokenId} from "../../../models/types";
import {contractAPI} from "../contracts";
import {batchRequest} from "../batch-request";
import {buildUID} from "../utils";
import {MJOL_CONTRACT_ID} from "../../enviroment/contract-names";

export const getNFTsByContractAndTokenId = async (contractId: ContractId, tokenId: TokenId) => {
    const jsonNft = await nftAPI.fetchNft(contractId, tokenId)
    const tokenPrice = await marketAPI.fetchTokenPrice(contractId, tokenId);
    const uid = buildUID(contractId, tokenId)
    const tokenWrapper = {[uid]: tokenPrice}
    return getConvertedNFT(contractId, jsonNft, tokenWrapper)
}

export async function getNftPayouts(contractId: string, tokenId: string): Promise<Record<string, number>> {
    const TREASURY_PERCENT = 2;
    let royalties: Record<string, number> = {
        'fee': TREASURY_PERCENT
    };

    if (contractId === "mjol.near") {
        return nftAPI.fetchTokenRoyalties(contractId, tokenId)
            .then(rawRoyalties => {
            for (let payoutKey in rawRoyalties) {
                royalties[payoutKey] = parseInt(rawRoyalties[payoutKey]) / 100
            }
            delete royalties['undefined'] //delete bad minted NFTs
            return royalties
        }).catch(() => royalties)
    }

    return nftAPI.fetchTokenPayouts(contractId, tokenId)
        .then(payouts => {
            let highestPayout = null;
            for (let payoutKey in payouts['payout']) {
                const payoutVal = parseInt(payouts['payout'][payoutKey]) / 1000000;
                if (!highestPayout || highestPayout[1] < payoutVal) {
                    highestPayout = [payoutKey, payoutVal]
                }
                royalties[payoutKey] = payoutVal
            }
            if (highestPayout) {
                delete royalties[highestPayout[0]]
            }

            return royalties
        }).catch(() => royalties)
}

function addExtraContracts(curContracts: string[]) {
    const extraContracts = ['mjol.near'];
    for (let contract of extraContracts) {
        if (!curContracts.includes(contract)) {
            curContracts.push('mjol.near');
        }
    }
    return curContracts
}

export async function getUserNfts(accountId: AccountId) {

    const contracts = await contractAPI.fetchUserTokenContracts(accountId)
    const contractIds = addExtraContracts(contracts)
    const tokenPrices = await marketAPI.fetchUserTokenPrices(accountId);

    const fetchNfts = (contractId: ContractId) =>
        nftAPI.fetchUserTokens(contractId, accountId)
            .then(nfts => batchRequest(nfts,
                token => getConvertedNFT(contractId, token, tokenPrices)).then(result => result.values)
            )

    return Promise.all([
            batchRequest(contractIds, fetchNfts).then(result => result.values.flat()),
            batchRequest(contractIds, contractAPI.fetchContractBeta).then(result => result.values)
        ]
    )
}


