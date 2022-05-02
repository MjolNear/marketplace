import {NFTStorage} from 'nft.storage'
import {CollectionMediaLinksInput, CollectionTraitInput, TokenTraitInput} from "../../@types/Form";
import {Optional} from "../../@types/Aliases";
import {CollectionTraits} from "../../@types/Collection";

const IPFS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYzZDFBZDhCMWIzMjQyQjFjMkUwNjE2NzcyOUNmMGEwYmIyNDE1OTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDExNjI4NTY3OSwibmFtZSI6InRldHMgZm9yIG9wZW4gbmZ0In0.gU_buy_gF4XUwptAU7Ck5_TSrfhZNLva5h2uWAusHNo'

export async function uploadTokenMetadataToIpfs(
    title: string,
    description: string,
    image: File,
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

export async function uploadCollectionMetadataToIpfs(
    title: string,
    description: string,
    image: File,
    bannerImage: Optional<File>,
    traits: Optional<CollectionTraitInput[]>,
    links: Optional<CollectionMediaLinksInput>
) {
    const client = new NFTStorage({
        token: IPFS_TOKEN
    })

    const processedTraits: CollectionTraits = {}

    traits?.forEach(trait => {
        processedTraits[trait.attribute] = trait.values.map(v => v.value)
    })

    return await client.store({
        name: title,
        description,
        image,
        bannerImage,
        traits: traits && traits.length !== 0 ? processedTraits : null,
        media: links
    })
}

export const normalizeIpfsLink = (nftIpfsLink: string, fileName?: string): string => {
    if (nftIpfsLink.startsWith("ipfs://")) {
        const pathname = nftIpfsLink.slice(7)

        if (fileName) {
            const matches = pathname.match(/[a-zA-Z\d]+\//)
            if (!matches || matches.length === 0) {
                return ""
            }
            return `https://ipfs.io/ipfs/${matches[0]}${encodeURIComponent(fileName)}`
        }
        return `https://ipfs.io/ipfs/${pathname}`
    }
    return ""
}