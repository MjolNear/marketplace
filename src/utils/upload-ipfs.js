import {NFTStorage} from 'nft.storage'

export async function storeNFT(nftName, nftDesc, file, traits) {
    const client = new NFTStorage({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYzZDFBZDhCMWIzMjQyQjFjMkUwNjE2NzcyOUNmMGEwYmIyNDE1OTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDExNjI4NTY3OSwibmFtZSI6InRldHMgZm9yIG9wZW4gbmZ0In0.gU_buy_gF4XUwptAU7Ck5_TSrfhZNLva5h2uWAusHNo'})

    const metadata = await client.store({
        name: nftName,
        description: nftDesc,
        image: file,
        traits: traits
    });
    return metadata
}

export function make_ref(ref_part){
    if (ref_part.substr(0, 7) === 'ipfs://'){
        return 'https://ipfs.io/ipfs/' + ref_part.substr(7)
    }
    return ""
}


