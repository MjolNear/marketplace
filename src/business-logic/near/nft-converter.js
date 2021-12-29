import {NFT} from "../models/NFT";

const isIPFS = require('is-ipfs');


export async function getJsonByURL(url) {
    try {
        const res = await fetch(url, {timeout: 30000});
        if (res.status < 199 || res.status > 299) {
            return {error: res.statusText + ' (' + res.status + ')'}
        }
        const text = await res.text();
        try {
            return JSON.parse(text)
        } catch (err) {
            return {error: text}
        }
    } catch (err) {
        return {error: err}
    }
}


function getMediaUrl(media, media_hash) {
    if (media) {
        if (media.substr(0, 4) === "http") {
            return media;
        } else if (isIPFS.cid(media)) {
            return 'https://ipfs.fleek.co/ipfs/' + media;
        }
    }
    if (media_hash && isIPFS.cid(media_hash)) {
        return 'https://ipfs.fleek.co/ipfs/' + media_hash;
    }
}

function getExternalLink(nft, contractId) {
    if (contractId === 'x.paras.near') {
        const part = nft.token_id.split(':')[0];
        return 'https://paras.id/token/x.paras.near::' + part + '/' + nft.token_id;
    }
    if (contractId.substr(-14) === 'mintbase1.near') {
        return 'https://www.mintbase.io/thing/' + nft.metadata.reference + ':' + contractId
    }

    if (contractId === 'pluminite.near') {
        return 'https://pluminite.com/#/gem/' + nft.token_id
    }


    return null;
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
export function convertStandardNFT(contractId, nft) {
    try {
        const metadata = nft.metadata;

        return new NFT(
            contractId,
            nft.token_id,
            nft.owner_id,
            metadata.title,
            metadata.description,
            metadata.copies,
            metadata.extra,
            getMediaUrl(metadata.media, metadata.media_hash),
            getExternalLink(nft, contractId)
        )
    } catch (e) {
        return null
    }

}

// nft example
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
export async function getMintbaseNFT(account, contractId, nft) {
    try {
        const metadata = nft.metadata;
        return account.viewFunction(contractId, 'nft_token_uri', {
            token_id: nft.id.toString()
        }).then(url => getJsonByURL(url)).then(resJson =>
            new NFT(
                contractId,
                nft.id,
                nft.owner_id.Account,
                resJson.title,
                resJson.description,
                metadata.copies,
                metadata.extra,
                getMediaUrl(resJson.media, resJson.media_hash),
                getExternalLink(nft, contractId)
            )
        )
    } catch (e) {
        return null
    }
}