import {ContractId} from "./types/aliases";

interface WhitelistedCollection {
    name: string
    contractId: string
    collectionId: string
}

export const whitelistedCollections: Record<string, WhitelistedCollection> = {
    "near-punks.near": {
        collectionId: "collection-9",
        name: "Near Punks",
        contractId: "near-punks.near"
    },
    "nearnautnft.near": {
        collectionId: "collection-10",
        name: "NEARNauts",
        contractId: "nearnautnft.near"
    },
    "asac.near": {
        collectionId: "collection-11",
        name: "AntisocialApeClub",
        contractId: "asac.near"
    },
    "ayc-nft.near": {
        collectionId: "collection-12",
        name: "TAYC",
        contractId: "ayc-nft.near"
    },
    "grimms.secretskelliessociety.near": {
        collectionId: "collection-13",
        name: "GrimmsArmy",
        contractId: "grimms.secretskelliessociety.near"
    },
    "nearton_nft.near": {
        collectionId: "collection-14",
        name: "NEARton",
        contractId: "nearton_nft.near"
    },
    "billionairebullsclub.near": {
        collectionId: "collection-15",
        name: "BillionaireBullsClub",
        contractId: "billionairebullsclub.near"
    },
    "spin-nft-contract.near": {
        collectionId: "collection-16",
        name: "FreakyElves",
        contractId: "spin-nft-contract.near"
    }
}

export const getTokenCollection = (contractId: ContractId): WhitelistedCollection | null => {
    return whitelistedCollections[contractId] || null
}