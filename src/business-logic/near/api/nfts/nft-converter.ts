import {NftAPI} from "../../get-utils";
import {viewFunction} from "../../enviroment/rpc";
import {ApprovedToken} from "../../../models/nft";
import {buildUID, getPrice} from "../utils";
import {ResponseTokenPrices} from "../types/response/market";
import {marketAPI} from "../market";
import {ContractId} from "../../../models/types";
import {ContractVerificationStatus} from "../../../models/contract";
import {getNftMintedSiteInfo} from "../../../whitelisted.contract";
import {MARKET_CONTRACT_ID} from "../../enviroment/contract-names";
import {NearCoreToken} from "../types/token";

const isIPFS = require('is-ipfs')

const DODIK_MEDIA_LIST: Map<string, string> = new Map([
    ["asac.near", 'https://ipfs.io/ipfs/bafybeicj5zfhe3ytmfleeiindnqlj7ydkpoyitxm7idxdw2kucchojf7v4/'],
    ["tayc-nft.near", 'https://ipfs.io/ipfs/QmXQEfLTs8W3968eVZrAwfY6oTN4UphyADdvbV2jop6S89/'],
    ["nearton_nft.near", "https://bafybeidunfr6lhn3v6a3xvjlczhhhzfielkq4vjpc5clplue63lfpm536q.ipfs.dweb.link/"],
    ["billionairebullsclub.near", "https://ipfs.io/ipfs/bafybeibhdz6f6t44qpjqjumns44il3ta6zxobq4vcl3ayh63pc4jvtckiy/"],
    ["pgonft.crayonlabs.near", "https://ipfs.io/ipfs/QmVEnyy59WGCLLsDMrqHkRf1cm8FwSrEVqQJEqm2ug65pg/"]
]);

async function getRealUrl(url: string, urlHash?: string, contractId?: string) {
    let storageLink = 'https://ipfs.fleek.co/ipfs/';

    if (contractId && contractId.endsWith('mintbase1.near')) {
        storageLink = 'https://arweave.net/';
    }

    if (url) {
        if (url.startsWith("http")) {
            return url;
        } else {
            if (contractId !== undefined && DODIK_MEDIA_LIST.has(contractId)) {
                return DODIK_MEDIA_LIST.get(contractId) + url;
            }
            const meta = await viewFunction({
                    contractId: (contractId || ''),
                    methodName: 'nft_metadata',
                    args: {}
                }
            )
            if (meta["base_uri"] !== ""){
                if (meta["base_uri"][meta["base_uri"].length - 1] !== '/'){
                    return meta["base_uri"] + '/' + url
                }
                return meta["base_uri"] + url
            }
            return storageLink + url;
        }
    }
    if (urlHash && isIPFS.cid(urlHash)) {
        return storageLink + urlHash;
    }
    return null
}

export const getMintText = (status: string) => {
    switch (status) {
        case ContractVerificationStatus.Unverified:
            return "Unverified"
        case ContractVerificationStatus.NotSupported:
            return "Not supported"
        default:
            return `Minted on ${status}`
    }
}

// Input example:
//
// token_id: '56178:34',
// owner_id: 'turk.near',
// metadata: {
//   title: 'Scent of a Cloud #34',
//   description: null,
//   media: 'bafybeidotqecqjq37mab2o4tlqevevpn5kgjhgeblj7zlscxt6g2rxrkau',
//   media_hash: null,
//   copies: 111,
//   issued_at: '1638389142491715689',
//   expires_at: null,
//   starts_at: null,
//   updated_at: null,
//   extra: null,
//   reference: 'bafybeicq6hg6azxaymzay7bi3cu2ozjcd7fclmqy56dzg5o5nttuzaklka',
//   reference_hash: null
// },
// approved_account_ids: {}
async function convertStandardNFT(contractId: string, nft: any, tokenPrices: ResponseTokenPrices): Promise<ApprovedToken> {
    const metadata = nft.metadata;
    const {approved_account_ids = {}} = nft
    const media = await getRealUrl(metadata.media, metadata.media_hash, contractId);
    const ipfsRef = await getRealUrl(metadata.reference, metadata.reference_hash, contractId);
    const mintSiteInfo = getNftMintedSiteInfo(nft, contractId)

    const uid = buildUID(contractId, nft.token_id)
    return Promise.resolve({
        contractId,
        tokenId: nft.token_id || nft.id,
        ownerId: nft.owner_id,
        title: metadata.title || '',
        description: metadata.description,
        copies: metadata.copies,
        media,
        ipfsReference: ipfsRef,
        price: getPrice(uid, tokenPrices),
        extra: metadata.extra,
        isApproved: MARKET_CONTRACT_ID in approved_account_ids,
        ...mintSiteInfo
    })
}


export async function mapTokenToNFT(contractId: ContractId, token: NearCoreToken) {
    const price = await marketAPI.fetchTokenPrice(contractId, token.token_id)
    const uid = buildUID(contractId, token.token_id)
    const wrappedPrice = {[uid]: price}
    return getConvertedNFT(contractId, token, wrappedPrice)
}

// nfts example
// id: 68,
// owner_id: { Account: 'turk.near' },
// approvals: {},
// metadata: {
//   title: null,
//   description: null,
//   media: null,
//   media_hash: null,
//   copies: 5,
//   issued_at: null,
//   expires_at: null,
//   starts_at: null,
//   updated_at: null,
//   extra: null,
//   reference: 'MIILJWlP432tEAhhhXTDwGeEMM35XxOmDKy2YFRy96Y',
//   reference_hash: null
// },
// royalty: { split_between: [Object], percentage: [Object] },
// split_owners: null,
// minter: 'kiora.near',
// loan: null,
// composeable_stats: { local_depth: 0, cross_contract_children: 0 },
// origin_key: null
// -----------------------------------------
// JSON example:
// category: 'membership',
// description: 'This token represents Proof of Attendance (PoA) for a single NEAR account at the MetaBUIDL Open House. The bearer of this token was one of the first 100 accounts that registered for the event.',
// copies: 10,
// media_hash: 'Zty1W1Xe8pp3sO6nBjJNIGgOfFV2E_xm25Hfm3rb1Dk',
// lock: null,
// visibility: 'safe',
// youtube_url: null,
// animation_url: null,
// animation_hash: null,
// document: null,
// document_hash: null,
// royalty: null,
// royalty_perc: 0.1,
// split_revenue: null,
// tags: [ 'nearedu', 'metabuidl', 'hackathon', 'metaverse' ],
// media: 'https://arweave.net/Zty1W1Xe8pp3sO6nBjJNIGgOfFV2E_xm25Hfm3rb1Dk',
// extra: [
// {
//   trait_type: 'Start Date',
//   value: 1630521000,
//   display_type: 'date'
// },
// { trait_type: 'End Date', value: 1630521000, display_type: 'date' },
// { trait_type: 'website', value: 'https://near.university/' }
// ],
// title: 'NEAR University Metaverse',
// store: 'nuniversity.mintbase1.near',
// external_url: 'https://near.university/',
// type: 'NEP171'
async function getMintbaseNFT(contractId: string, nft: any, tokenPrices: ResponseTokenPrices): Promise<ApprovedToken> {
    const metadata = nft.metadata;
    const url = await viewFunction({
            contractId,
            methodName: 'nft_token_uri',
            args: {
                token_id: nft.id.toString()
            }
        }
    )

    const jsonNFT = await NftAPI.getJsonByURL(url)
    const media = await getRealUrl(jsonNFT.media, jsonNFT.media_hash, contractId)
    const {approvals = {}} = nft
    const uid = buildUID(contractId, nft.id.toString())
    const mintSiteInfo = getNftMintedSiteInfo(nft, contractId)
    const ipfsReference = await getRealUrl(nft.metadata.reference, nft.metadata.reference_hash, contractId);

    return Promise.resolve({
        contractId,
        tokenId: nft.id.toString(),
        ownerId: nft.owner_id.Account,
        title: jsonNFT.title || '',
        description: jsonNFT.description,
        copies: metadata.copies,
        media: media,
        ipfsReference: ipfsReference,
        extra: nft.metadata.extra,
        price: getPrice(uid, tokenPrices),
        isApproved: MARKET_CONTRACT_ID in approvals,
        ...mintSiteInfo
    })
}

export async function getConvertedNFT(
    contractId: ContractId,
    jsonNft: any,
    tokenPrices: ResponseTokenPrices = {}
): Promise<ApprovedToken> {
    if (contractId.endsWith('.mintbase1.near')) {
        return getMintbaseNFT(contractId, jsonNft, tokenPrices)
    }
    return convertStandardNFT(contractId, jsonNft, tokenPrices)
}