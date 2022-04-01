import {NFTStorage} from 'nft.storage'
import {TokenTraitInput} from "../types/form";
const IPFS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYzZDFBZDhCMWIzMjQyQjFjMkUwNjE2NzcyOUNmMGEwYmIyNDE1OTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDExNjI4NTY3OSwibmFtZSI6InRldHMgZm9yIG9wZW4gbmZ0In0.gU_buy_gF4XUwptAU7Ck5_TSrfhZNLva5h2uWAusHNo'

export async function uploadTokenMetadataToIpfs(
    title: string,
    description: string,
    image: Blob | File,
    traits: TokenTraitInput[]
) {
    const client = new NFTStorage({
        token: IPFS_TOKEN
    })

    return await client.store({
        name: title,
        description,
        image,
        traits: traits.length === 0 ? null : traits
    })
}

export async function storeCollection(
    title: string,
    description: string,
    image: Blob | File,
    bannerImage: Blob | File,
    traits: any
) {
    const client = new NFTStorage({
        token: IPFS_TOKEN
    })

    return await client.store({
        name: title,
        description,
        image,
        bannerImage,
        traits
    })
}

export function makeNftLink(nftIpfsLink: string) {
    if (nftIpfsLink.startsWith('ipfs://')) {
        return 'https://ipfs.io/ipfs/' + nftIpfsLink.slice(7)
    }
    return ""
}
