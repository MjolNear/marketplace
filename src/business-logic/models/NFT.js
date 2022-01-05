import {NftCollection} from "./NftCollection";

export class NFT {
    constructor(contractId, tokenId, ownerId, title, description, copies, mediaURL, referenceURL, mintSite, price) {
        // NFT contract id
        this.contractId = contractId;

        // NFT token id
        this.tokenId = tokenId;

        // NFT owner id
        this.ownerId = ownerId;

        // NFT title
        this.title = title;

        // NFT description
        this.description = description;

        // Amount of NFT copies
        this.copies = copies;

        // Link to nft media url.
        this.mediaURL = mediaURL;

        // Link to JSON file with extra information about NFT, like
        // traits, history and etc.
        this.referenceURL = referenceURL;

        // Contains information about mint on external market.
        this.mintSite = mintSite;

        // Listed NFT market price,
        // `null` if NFT not listed
        this.price = price;
    }

    isListed() {
        return this.price !== null
    }

    // Returns primary key for NFT,
    // 'contractId/tokenId'
    getKey() {
        return this.contractId + '/' + this.tokenId
    }

    // Returns traits for NFT,
    // If traits not provided returns `null`
    getTraits() {
        //async GET json from this.reference_url
        return null
    }

    // Returns information about NFT collection
    getCollectionInfo() {
        if ('mjol.near') {
            return new NftCollection('Standard collection')
        }

        // async GET json from this.referenceURL
        return new NftCollection()
    }

}