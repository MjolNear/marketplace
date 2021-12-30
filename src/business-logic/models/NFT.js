export class NFT {
    constructor(contract_id, token_id, owner_id, title, description, copies, media_url, reference_url, mint_site_info, price) {
        this.contract_id = contract_id;
        this.token_id = token_id;
        this.owner_id = owner_id;
        this.title = title;
        this.description = description;
        this.copies = copies;
        this.media_url = media_url;
        this.reference_url = reference_url; //link to JSON file with extra information about NFT
        this.mint_site_info = mint_site_info; // dict with info about market where NFT was minted
                                              // {'title': 'Paras', 'nft_link': 'https://...'}
        this.price = price //null if NFT is not listed
    }

    getKey() {
        return this.contract_id + ':' + this.token_id
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