export class NFT {
    constructor(contract_id,
                token_id,
                owner_id,
                title,
                description,
                copies,
                extra,
                media_url,
                external_url
    ) {
        this.contract_id = contract_id;
        this.token_id = token_id;
        this.owner_id = owner_id;
        this.title = title;
        this.description = description;
        this.copies = copies;
        this.extra = extra;
        this.media_url = media_url;
        this.external_url = external_url;
    }
}