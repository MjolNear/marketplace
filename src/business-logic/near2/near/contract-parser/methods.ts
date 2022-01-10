export enum NftContractMethod {
    NftApprove = 1 << 0,
    NftTransfer = 1 << 1,
    NftTransferCall = 1 << 2,
    NftToken = 1 << 3,
    NftMetadata = 1 << 4,
}

const contactSatisfies = (contractMask: number, methods: NftContractMethod[]) =>
    methods.every(methodMask => (methodMask & contractMask) === 1)