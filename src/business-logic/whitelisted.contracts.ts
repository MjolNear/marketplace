import {ContractId} from "./models/types";
import {ContractVerificationStatus} from "./models/contract";

export enum WhitelistedContracts {
    MjolNear = "mjol.near",
    Paras = "x.paras.near",
    NearPunks = "near-punks.near",
    NEARNauts = "nearnautnft.near"
}

export interface NftMintedInfo {
    name: string,
    link: string
    verification: ContractVerificationStatus
}

export const getMintbaseSiteInfo = (contractId: ContractId, hash?: string) => {
    const name = contractId.split(".mintbase1.near")[0]
    return {
        name: name ? name : "Mintbase",
        verification: ContractVerificationStatus.Verified,
        link: hash
            ? `https://www.mintbase.io/thing/${hash}:${contractId}`
            : `https://www.mintbase.io/`
    }
}

export const getNftMintedSiteInfo = (nft: any, contractId: ContractId): NftMintedInfo => {
    const tokenId = nft.token_id || nft.tokenId
    switch (contractId) {
        case WhitelistedContracts.MjolNear:
            return {
                name: 'MjolNear',
                link: `https://mjolnear.com/nfts/${contractId}/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContracts.Paras:
            const holder = tokenId.split(':')[0]
            return {
                name: 'Paras',
                link: `https://paras.id/token/x.paras.near::${holder}/${tokenId}`,
                verification: ContractVerificationStatus.Verified

            }
        case WhitelistedContracts.NearPunks:
            return {
                name: "Near Punks",
                link: `https://npunks.io/punk/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContracts.NEARNauts:
            return {
                name: "NEARNauts",
                link: "https://www.nearnauts.io/#/nautview",
                verification: ContractVerificationStatus.Verified
            }
        default:
            if (contractId.endsWith("mintbase1.near")) {
                return getMintbaseSiteInfo(contractId, nft.metadata.reference)
            }
            return {
                name: '',
                link: '',
                verification: ContractVerificationStatus.Unverified
            }
    }
}
