export enum NftContractMethod {
    NftApprove = 1 << 0,
    NftTransfer = 1 << 1,
    NftTransferCall = 1 << 2,
    NftToken = 1 << 3,
    NftMetadata = 1 << 4,
}

export const contactSatisfiesAll = (contractMask: number, methods: NftContractMethod[]) =>
    methods.every(methodMask => contractSatisfiesMethod(contractMask, methodMask))

export const contractSatisfiesMethod = (contractMask: number, method: NftContractMethod) =>
    (method & contractMask) === 1