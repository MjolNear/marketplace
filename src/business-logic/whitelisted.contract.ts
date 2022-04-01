import {ContractId} from "./types/aliases";
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
    BillionaireBullsClub = "billionairebullsclub.near",
    FreakyElves = "spin-nft-contract.near"
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

const UNVERIFIED_STATUS: TokenMintedInfo = {
    mintedSiteName: '',
    mintedSiteLink: '',
    verification: ContractVerificationStatus.Unverified
}

export const getMarketNftVerification = (contractId: ContractId): ContractVerificationStatus => {
    if (contractId.endsWith(".mintbase1.near") || verifiedContracts.has(contractId)) {
        return ContractVerificationStatus.Verified
    } else {
        return ContractVerificationStatus.Unverified
    }
}

export const getMintbaseSiteInfo = (contractId: ContractId, reference?: string): TokenMintedInfo => {
    const name = contractId.split(".mintbase1.near")[0]
    return {
        mintedSiteName: name ? name : "Mintbase",
        verification: ContractVerificationStatus.Verified,
        mintedSiteLink: reference
            ? `https://www.mintbase.io/thing/${reference}:${contractId}`
            : `https://www.mintbase.io/`
    }
}

export const getNftMintedSiteInfo = (
    nft: {
        tokenId?: string,
        token_id?: string,
        metadata?: {
            reference?: string
        }
    },
    contractId: ContractId
): TokenMintedInfo => {
    const tokenId = nft.token_id || nft.tokenId

    if (contractId.endsWith(".mintbase1.near")) {
        return getMintbaseSiteInfo(contractId, nft?.metadata?.reference)
    }

    if (!tokenId) {
        return UNVERIFIED_STATUS
    }

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
        case WhitelistedContract.FreakyElves:
            return {
                mintedSiteName: "FreakyElves",
                mintedSiteLink: "https://nft.spin.fi",
                verification: ContractVerificationStatus.Verified
            }
        default:
            return UNVERIFIED_STATUS
    }
}
