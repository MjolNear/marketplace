import {NFTStorage} from 'nft.storage'

const IPFS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYzZDFBZDhCMWIzMjQyQjFjMkUwNjE2NzcyOUNmMGEwYmIyNDE1OTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDExNjI4NTY3OSwibmFtZSI6InRldHMgZm9yIG9wZW4gbmZ0In0.gU_buy_gF4XUwptAU7Ck5_TSrfhZNLva5h2uWAusHNo'

export async function storeNFT(name: any, description: any, image: any, traits: any) {
    const client = new NFTStorage({
        token: IPFS_TOKEN
    })

    return await client.store({
        name,
        description,
        image,
        traits
    })
}

export async function storeCollection(name: any, description: any, image: any, bannerImage: any, traits: any) {
    const client = new NFTStorage({
        token: IPFS_TOKEN
    })

    return await client.store({
        name,
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
