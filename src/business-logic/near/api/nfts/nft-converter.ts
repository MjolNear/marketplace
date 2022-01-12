import {NftAPI} from "../../get-utils";
import {viewFunction} from "../rpc";
import {Nft} from "../../../models/nft";
import {TokenPrices} from "../market/api";

const isIPFS = require('is-ipfs')

function getRealUrl(url: string, urlHash?: string, contractId?: string) {
    let storageLink = 'https://ipfs.fleek.co/ipfs/';

    if (contractId && contractId.endsWith('mintbase1.near')) {
        storageLink = 'https://arweave.net/';
    }

    if (url) {
        if (url.startsWith("http")) {
            return url;
        } else if (isIPFS.cid(url)) {
            return storageLink + url;
        }
    }
    if (urlHash && isIPFS.cid(urlHash)) {
        return storageLink + urlHash;
    }
    return null
}

function getNftMintedSiteInfo(nft: any, contractId: string) {
    if (contractId === 'x.paras.near') {
        const holder = nft.token_id.split(':')[0];
        return {
            name: 'Paras',
            nftLink: `https://paras.id/token/x.paras.near::${holder}/${nft.token_id}`
        }
    }
    if (contractId.endsWith('mintbase1.near')) {
        return {
            name: 'Mintbase',
            nftLink: `https://www.mintbase.io/thing/${nft.metadata.reference}:${contractId}`
        }
    }
    // if (contractId === 'pluminite.near') {
    //     return new MintSite(
    //         'Pluminite',
    //         `https://pluminite.com/#/gem/${nft.token_id}`
    //     )
    // }

    if (contractId.endsWith('mjol.near')) {
        return {
            name: 'MjolNear',
            nftLink: `https://mjolnear.com/nft/${contractId}/${nft.token_id}`
        }
    }
    return {
        name: 'Non-verified contract',
        nftLink: ''
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
function convertStandardNFT(contractId: string, nft: any, listedNftKeys: TokenPrices): Promise<Nft> {
    const metadata = nft.metadata;
    const mediaUrl = getRealUrl(metadata.media, metadata.media_hash, contractId);
    if (!mediaUrl) {
        return Promise.reject("Standard NFT has no media URL")
    }
    return Promise.resolve({
        contractId,
        tokenId: nft.token_id || nft.id,
        ownerId: nft.owner_id,
        title: metadata.title,
        description: metadata.description,
        copies: metadata.copies,
        mediaURL: mediaUrl,
        referenceURL: getRealUrl(metadata.reference, metadata.reference_hash, contractId),
        mintSite: getNftMintedSiteInfo(nft, contractId),
        price: listedNftKeys[contractId + ':' + nft.token_id] === undefined
            ? null
            : listedNftKeys[contractId + ':' + nft.token_id]
    })
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
async function getMintbaseNFT(contractId: string, nft: any, listedNftKeys: TokenPrices): Promise<Nft> {
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
    const mediaUrl = getRealUrl(jsonNFT.media, jsonNFT.media_hash, contractId)
    if (!mediaUrl) {
        return Promise.reject("Mintbase NFT has no media URL")
    }
    return Promise.resolve({
        contractId,
        tokenId: nft.id.toString(),
        ownerId: nft.owner_id.Account,
        title: jsonNFT.title,
        description: jsonNFT.description,
        copies: metadata.copies,
        mediaURL: mediaUrl,
        referenceURL: getRealUrl(nft.metadata.reference, nft.metadata.reference_hash, contractId),
        mintSite: getNftMintedSiteInfo(nft, contractId),
        price: listedNftKeys[contractId + ':' + nft.id] === undefined
            ? null
            : listedNftKeys[contractId + ':' + nft.id]
    })
}

export async function getConvertedNFT(contractId: string, nft: any, listedNftKeys: TokenPrices) {
    if (contractId.endsWith('mintbase1.near')) {
        return getMintbaseNFT(contractId, nft, listedNftKeys)
    }
    return convertStandardNFT(contractId, nft, listedNftKeys)
}