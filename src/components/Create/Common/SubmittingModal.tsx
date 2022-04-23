import React, {useCallback, useState} from 'react';
import Modal from "../../Common/Modal/Modal";
import {AiFillCloseCircle, AiOutlineClose} from "react-icons/ai";
import DarkBlueGradientButton from "../../Common/Buttons/DarkBlueGradientButton";
import PreviewTokenCard from "./Preview/PreviewTokenCard";
import IpfsIcon from "../../Icons/IpfsIcon";
import MjolLoader from "../../Common/Loaders/MjolLoader";
import NearIcon from "../../Icons/near/NearIcon";
import {
    normalizeIpfsLink,
    uploadCollectionMetadataToIpfs,
    uploadTokenMetadataToIpfs
} from "../../../business-logic/ipfs/upload";
import {Optional} from "../../../@types/Aliases";
import {
    CollectionMediaLinksInput,
    CollectionTraitInput,
    ImageInput,
    TokenTraitInput
} from "../../../@types/Form";
import {createCollection, mintToCommonCollection} from "../../../near/api/nfts/mint";
import {CreateCollectionMetadataDto} from "../../../@types/Collection";
import PreviewCollectionCard from "./Preview/PreviewCollectionCard";


interface SubmittingModalProps {
    closeModal: () => void
    data: TokenSubmitProps | CollectionSubmitProps
}

export interface CollectionSubmitProps {
    payload: "collection"
    accountId: string,
    title: string
    description: string
    media: Required<ImageInput>
    banner: ImageInput
    collectionId?: string
    links: CollectionMediaLinksInput
    traits: CollectionTraitInput[]
}

export interface TokenSubmitProps {
    payload: "token"
    title: string,
    accountId: string,
    description: string,
    media: Required<ImageInput>,
    collection: Optional<{ id: string, name: string }>
    copies: number,
    payouts: Optional<Record<string, string>>
    traits: TokenTraitInput[]
}

const SubmittingModal: React.FC<SubmittingModalProps> = ({
    closeModal,
    data
}) => {
    const [loadingState, setLoadingState] = useState<"waiting"
        | "ipfs"
        | "near"
        | "success"
        | "ipfsFailure"
        | "nearFailure">("waiting")

    const submitToken = useCallback((data: TokenSubmitProps) => {
        setLoadingState("ipfs")
        uploadTokenMetadataToIpfs(data.title, data.description, data.media.file, data.traits)
            .then(response => {
                setLoadingState("near")
                const ipfsMedia = normalizeIpfsLink(response.data.image.href, data.media.file.name);
                const ipfsRef = normalizeIpfsLink(response.url);
                const token_metadata = {
                    title: data.title,
                    description: data.description,
                    media: ipfsMedia,
                    reference: ipfsRef,
                    copies: Number(data.copies)
                }
                return mintToCommonCollection(
                    token_metadata,
                    data.payouts ? {payout: data.payouts} : null,
                    data.accountId,
                    data.collection?.id
                ).then(() => setLoadingState("success"))
                    .catch(() => setLoadingState("nearFailure"))
            })
            .catch(() => setLoadingState("ipfsFailure"))
    }, [])


    const submitCollection = useCallback((data: CollectionSubmitProps) => {
        setLoadingState("ipfs")
        uploadCollectionMetadataToIpfs(data.title,
            data.description,
            data.media.file,
            data.banner.file || null,
            data.traits,
            data.links)
            .then(response => {
                setLoadingState("near")
                const ipfsMedia = normalizeIpfsLink(response.data.image.href, data.media.file.name);
                const ipfsRef = normalizeIpfsLink(response.url);
                const metadata: CreateCollectionMetadataDto = {
                    title: data.title,
                    desc: data.description,
                    media: ipfsMedia,
                    reference: ipfsRef,
                    custom_collection_id: data.collectionId || null
                }
                return createCollection(metadata)
                    .then(() => setLoadingState("success"))
                    .catch(() => setLoadingState("nearFailure"))
            })
            .catch(() => setLoadingState("ipfsFailure"))
    }, [])

    const submit = useCallback(() => {
        data.payload === "token"
            ? submitToken(data)
            : submitCollection(data)
    }, [data, submitToken, submitCollection])


    return (
        <Modal closeOnBgClick={false} closeOnEscape={false}>
            <div className="mx-auto w-full max-w-[600px] p-7 bg-white rounded-2xl relative font-archivo">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                    <AiOutlineClose onClick={closeModal} className="cursor-pointer" size={20}/>
                </div>
                <div className="flex flex-row gap-8 mt-4">
                    <div className="flex flex-col justify-between">
                        <div className="font-semibold text-sm text-gray-600">
                            <div className="mb-12">
                                {data.payload === "token" ? "NFT" : "Collection"} metadata will be stored on IPFS
                                <div>
                                    It usually can take from 3-5 minutes to became image visible.
                                </div>
                            </div>
                            <div>
                                {loadingState === "ipfsFailure" || loadingState === "nearFailure"
                                    ?
                                    <div className="grid place-items-center">
                                        <AiFillCloseCircle size={100} className="fill-red-500"/>
                                    </div>
                                    :
                                    <MjolLoader size={100}/>
                                }
                                <div className="text-center text-xs-2 mt-4">
                                    {loadingState === "nearFailure" && "Transaction failed"}
                                    {loadingState === "ipfsFailure" && "Loading to IPFS storage failed"}
                                    {loadingState === "waiting" && "Waiting for submit"}
                                    {loadingState === "ipfs"
                                        && <div className="inline-flex items-center">
                                            Uploading data to IPFS
                                            <IpfsIcon size={18}/>
                                        </div>
                                    }
                                    {loadingState === "near"
                                        && <div className="inline-flex items-center gap-2">
                                            Connecting to wallet
                                            <NearIcon fill="fill-gray-600" size={14}/>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div
                                className="text-gray-600 text-xs">
                                {loadingState !== "waiting"
                                    && loadingState !== "ipfsFailure"
                                    && loadingState !== "nearFailure"
                                    && "Please don't close the window"
                                }
                            </div>
                            <DarkBlueGradientButton
                                title={
                                    data.payload === "token"
                                        ? "Mint NFT"
                                        : "Create collection"
                                }
                                isLoading={loadingState === "ipfs" || loadingState === "near"}
                                onClick={submit}/>
                        </div>
                    </div>
                    <div className="max-md:hidden w-full max-w-[240px]">
                        {data.payload === "token" &&
                            <PreviewTokenCard title={data.title}
                                              url={data.media.url}
                                              collectionName={data.collection?.name}
                            />
                        }
                        {data.payload === "collection"
                            && <PreviewCollectionCard title={data.title}
                                                      description={data.description}
                                                      ownerId={data.accountId}
                                                      mediaUrl={data.media.url}
                            />
                        }
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SubmittingModal;