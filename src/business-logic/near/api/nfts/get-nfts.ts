import {getConvertedNFT} from "./nft-converter";
import {getNftPriceByTokenUID, getNftPricesByUser} from "../market/get-nfts-market";
import {viewFunction} from "../rpc";
import {fetchNftContracts} from "../nft-contracts";
import {nftAPI} from "./api";


const getNFTsByContractAndAccount = (
    contractId: string,
    accountId: string,
    limit = 20,
    from = 0
): Promise<any[]> => {
    return viewFunction({
        contractId,
        methodName: 'nft_tokens_for_owner',
        args: {
            account_id: accountId,
            from_index: from.toString(),
            limit: limit
        }
    })
}


export async function getNFTsByContractAndTokenId(contractId: string, tokenId: string) {
    const nft = await nftAPI.fetchByContractAndToken(contractId, tokenId)
    const listedNftKeys = await getNftPriceByTokenUID(contractId, tokenId);
    return getConvertedNFT(contractId, nft, listedNftKeys)
}

export async function getNftPayouts(contractId: string, tokenId: string) {
    const TREASURY_PERCENT = 2;
    return nftAPI.fetchPayouts(contractId, tokenId).then(payouts => {
        let royalties: Record<string, number> = {'treasury': TREASURY_PERCENT};
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
        delete royalties['undefined']

        return royalties
    })
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

export async function getNfts(accountId: string) {

    let nftContracts = await fetchNftContracts(accountId)
    nftContracts = addExtraContracts(nftContracts)

    const listedNftKeys = await getNftPricesByUser(accountId);
    return nftContracts.map(contractId =>
        getNFTsByContractAndAccount(contractId, accountId)
            .then(nfts =>
                nfts.map((nft: any) =>
                    getConvertedNFT(contractId, nft, listedNftKeys)
                )
            )
    )
}


