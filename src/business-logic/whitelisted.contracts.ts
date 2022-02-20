import {ContractId} from "./models/types";
import {ContractVerificationStatus} from "./models/contract";
import {TokenMintedInfo} from "./models/nft";

export enum WhitelistedContracts {
    MjolNear = "mjol.near",
    Paras = "x.paras.near",
    NearPunks = "near-punks.near",
    NEARNauts = "nearnautnft.near"
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
        case WhitelistedContracts.MjolNear:
            return {
                mintedSiteName: 'MjolNear',
                mintedSiteLink: `https://mjolnear.com/nfts/${contractId}/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContracts.Paras:
            const holder = tokenId.split(':')[0]
            return {
                mintedSiteName: 'Paras',
                mintedSiteLink: `https://paras.id/token/x.paras.near::${holder}/${tokenId}`,
                verification: ContractVerificationStatus.Verified

            }
        case WhitelistedContracts.NearPunks:
            return {
                mintedSiteName: "Near Punks",
                mintedSiteLink: `https://npunks.io/punk/${tokenId}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContracts.NEARNauts:
            return {
                mintedSiteName: "NEARNauts",
                mintedSiteLink: "https://www.nearnauts.io/#/nautview",
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
