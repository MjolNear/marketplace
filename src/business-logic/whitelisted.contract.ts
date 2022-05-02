import {ContractId, Optional} from "../@types/Aliases";
import {ContractVerificationStatus} from "../@types/Contract";
import {TokenContractInfo} from "../@types/Token";

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
    FreakyElves = "spin-nft-contract.near",
    NearNymphs = "nymphs.near"
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

const UNVERIFIED_STATUS: TokenContractInfo = {
    contractName: '',
    // mintedSiteLink: '',
    verification: ContractVerificationStatus.Unverified
}

export const getMarketNftVerification = (contractId: ContractId): ContractVerificationStatus => {
    if (contractId.endsWith(".mintbase1.near") || verifiedContracts.has(contractId)) {
        return ContractVerificationStatus.Verified
    } else {
        return ContractVerificationStatus.Unverified
    }
}

export const getMintbaseSiteInfo = (contractId: ContractId, reference?: Optional<string>): TokenContractInfo => {
    const name = contractId.split(".mintbase1.near")[0]
    return {
        contractName: name ? name : "Mintbase",
        verification: ContractVerificationStatus.Verified,
        // mintedSiteLink: reference
        //     ? `https://www.mintbase.io/thing/${reference}:${contractId}`
        //     : `https://www.mintbase.io/`
    }
}

export const getNftMintedSiteInfo = (
    nft: {
        tokenId?: string,
        token_id?: string,
        metadata?: {
            reference?: Optional<string>
        }
    },
    contractId: ContractId
): TokenContractInfo => {
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
                contractName: 'MjolNear',
                // mintedSiteLink: `https://mjolnear.com/#/nfts/${contractId}/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.Paras:
            const holder = tokenId.split(':')[0]
            return {
                contractName: 'Paras',
                verification: ContractVerificationStatus.Verified

            }
        case WhitelistedContract.NearPunks:
            return {
                contractName: "Near Punks",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.NEARNauts:
            return {
                contractName: "NEARNauts",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.AntisocialApeClub:
            return {
                contractName: "AntisocialApeClub",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.TAYC:
            return {
                contractName: "TAYC",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.GrimmsArmy:
            return {
                contractName: "GrimmsArmy",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.NEARton:
            return {
                contractName: "NEARton",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.BillionaireBullsClub:
            return {
                contractName: "BillionaireBullsClub",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.FreakyElves:
            return {
                contractName: "FreakyElves",
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContract.NearNymphs:
            return {
                contractName: "NearNymphs",
                verification: ContractVerificationStatus.Verified
            }
        default:
            return UNVERIFIED_STATUS
    }
}
