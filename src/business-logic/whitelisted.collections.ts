import {ContractId} from "./types/aliases";

interface WhitelistedCollection {
    name: string
    contractId: string
    collectionId: string
}

export const whitelistedCollections: Record<string, WhitelistedCollection> = {
    "near-punks.near": {
        collectionId: "npunks",
        name: "Near Punks",
        contractId: "near-punks.near"
    },
    "nearnautnft.near": {
        collectionId: "nearnauts",
        name: "NEARNauts",
        contractId: "nearnautnft.near"
    },
    "asac.near": {
        collectionId: "asac",
        name: "AntisocialApeClub",
        contractId: "asac.near"
    },
    "tayc-nft.near": {
        collectionId: "tayc",
        name: "TAYC",
        contractId: "tayc-nft.near"
    },
    "grimms.secretskelliessociety.near": {
        collectionId: "grimmsarmy",
        name: "GrimmsArmy",
        contractId: "grimms.secretskelliessociety.near"
    },
    "nearton_nft.near": {
        collectionId: "nearton",
        name: "NEARton",
        contractId: "nearton_nft.near"
    },
    "billionairebullsclub.near": {
        collectionId: "billionairebullsclub",
        name: "BillionaireBullsClub",
        contractId: "billionairebullsclub.near"
    },
    "spin-nft-contract.near": {
        collectionId: "freaky-elves",
        name: "FreakyElves",
        contractId: "spin-nft-contract.near"
    },
    "nymphs.near": {
        collectionId: "nymphs",
        name: "Near Nymphs",
        contractId: "nymphs.near"
    }
}

export const getTokenCollection = (contractId: ContractId): WhitelistedCollection | null => {
    return whitelistedCollections[contractId] || null
}