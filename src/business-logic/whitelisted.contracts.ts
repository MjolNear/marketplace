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

export const getNftMintedSiteInfo = (nft: any, contractId: ContractId): NftMintedInfo => {
    switch (contractId) {
        case WhitelistedContracts.MjolNear:
            return {
                name: 'MjolNear',
                link: `https://mjolnear.com/nfts/${contractId}/${nft.token_id}`,
                verification: ContractVerificationStatus.Verified
            }
        case WhitelistedContracts.Paras:
            const holder = nft.token_id.split(':')[0];
            return {
                name: 'Paras',
                link: `https://paras.id/token/x.paras.near::${holder}/${nft.token_id}`,
                verification: ContractVerificationStatus.Verified

            }
        case WhitelistedContracts.NearPunks:
            return {
                name: "Near Punks",
                link: `https://npunks.io/punk/${nft.token_id}`,
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
                return {
                    name: contractId.split(".mintbase1.near")[0],
                    link: `https://www.mintbase.io/thing/${nft.metadata.reference}:${contractId}`,
                    verification: ContractVerificationStatus.Verified
                }
            }
            return {
                name: '',
                link: '',
                verification: ContractVerificationStatus.Unverified
            }
    }
}
