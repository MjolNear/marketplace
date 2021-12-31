export class NFT {
    constructor(contractId, tokenId, ownerId, title, description, copies, mediaURL, referenceURL, mintSite, price) {
        this.contractId = contractId;
        this.tokenId = tokenId;
        this.ownerId = ownerId;
        this.title = title;
        this.description = description;
        this.copies = copies;
        this.mediaURL = mediaURL;
        this.referenceURL = referenceURL; //link to JSON file with extra information about NFT
        this.mintSite = mintSite; // dict with info about market where NFT was minted
        // {'title': 'Paras', 'nft_link': 'https://...'}
        this.price = price //null if NFT is not listed
    }


    getKey() {
        return this.contractId + ':' + this.tokenId
    }

    getTraits() {
        //async GET json from this.reference_url
        return null
    }

    getCollectionInfo() {
        if ('mjol.near') {
            return {
                'title': 'Standart collection',
                'title_image_url': ''
            };
        }
        //async GET json from this.reference_url
        return {
            'title': '',
            'title_image_url': ''
        };
    }

}