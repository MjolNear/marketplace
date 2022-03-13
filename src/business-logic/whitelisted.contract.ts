import {ContractId} from "./models/types";
import {ContractVerificationStatus} from "./models/contract";
import {TokenMintedInfo} from "./models/nft";

export enum WhitelistedContract {
    MjolNear = "mjol.near",
    Paras = "x.paras.near",
    NearPunks = "near-punks.near",
    NEARNauts = "nearnautnft.near",
    AntisocialApeClub = 'asac.near',
    TAYC = "tayc-nft.near",
    GrimmsArmy = "grimms.secretskelliessociety.near",
    NEARton = "nearton_nft.near",
    BillionaireBullsClub = "billionairebullsclub.near"
}

export const DODIK_GET_LIST = new Set<string>([
    WhitelistedContract.NearPunks, WhitelistedContract.TAYC,
    WhitelistedContract.AntisocialApeClub, WhitelistedContract.NEARton,
    WhitelistedContract.BillionaireBullsClub
]);

export const DODIK_INDEX_LIST = new Map<string, number>([
    ["nearton_nft.near", 1]
]);

export const verifiedContracts = new Set(Object.values(WhitelistedContract) as string[])

export const getMarketNftVerification = (contractId: ContractId): ContractVerificationStatus => {
    if (contractId.endsWith(".mintbase1.near") || verifiedContracts.has(contractId)) {
        return ContractVerificationStatus.Verified
    } else {
        return ContractVerificationStatus.Unverified
    }
}

export const getMintbaseSiteInfo = (contractId: ContractId, hash?: string): TokenMintedInfo => {
    const name = contractId.split(".mintbase1.near")[0]
    return {
        mintedSiteName: name ? name : "Mintbase",
        verification: ContractVerificationStatus.Verified,
        mintedSiteLink: hash
            ? `https://www.mintbase.io/thing/${hash}:${contractId}`
            : `https://www.mintbase.io/`
    }
}

export const getNftMintedSiteInfo = (nft: any, contractId: ContractId): TokenMintedInfo => {
    const tokenId = nft.token_id || nft.tokenId
    switch (contractId) {
        case WhitelistedContract.MjolNear:
            return {
                mintedSiteName: 'MjolNear',
                mintedSiteLink: `https://mjolnear.com/#/nfts/${contractId}/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.Paras:
            const holder = tokenId.split(':')[0]
            return {
                mintedSiteName: 'Paras',
                mintedSiteLink: `https://paras.id/token/x.paras.near::${holder}/${tokenId}`,
                verification: ContractVerificationStatus.Verified

            }
        case WhitelistedContract.NearPunks:
            return {
                mintedSiteName: "Near Punks",
                mintedSiteLink: `https://npunks.io/punk/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.NEARNauts:
            return {
                mintedSiteName: "NEARNauts",
                mintedSiteLink: "https://www.nearnauts.io/#/nautview",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.AntisocialApeClub:
            return {
                mintedSiteName: "AntisocialApeClub",
                mintedSiteLink: "https://antisocialape.club",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.TAYC:
            return {
                mintedSiteName: "TAYC",
                mintedSiteLink: "https://tayc.app",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.GrimmsArmy:
            return {
                mintedSiteName: "GrimmsArmy",
                mintedSiteLink: "https://secretskelliessociety.com",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.NEARton:
            return {
                mintedSiteName: "NEARton",
                mintedSiteLink: `https://nearton.org/house/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.BillionaireBullsClub:
            return {
                mintedSiteName: "BillionaireBullsClub",
                mintedSiteLink: "http://billionaire-bulls.club",
                verification: ContractVerificationStatus.Verified
            }
        default:
            if (contractId.endsWith("mintbase1.near")) {
                return getMintbaseSiteInfo(contractId, nft.metadata.reference)
            }
            return {
                mintedSiteName: '',
                mintedSiteLink: '',
                verification: ContractVerificationStatus.Unverified
            }
    }
}
