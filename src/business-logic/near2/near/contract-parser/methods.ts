export enum NftContractMethod {
    NftApprove = 1 << 0,
    NftTransfer = 1 << 1,
    NftTransferCall = 1 << 2,
    NftToken = 1 << 3,
    NftMetadata = 1 << 4,
}

const contactSatisfies = (mask: number, methods: NftContractMethod[]) =>
    methods.every(methodMask => (methodMask & mask) === 1)