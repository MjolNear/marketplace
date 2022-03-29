import React, {useCallback, useEffect, useMemo, useState} from 'react';
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import {useForm} from "react-hook-form";
import InputLabel from "../../Common/Forms/InputLabel";
import UploadImage from "../Common/UploadImage";
import TitleInput from "../Common/TitleInput";
import DescriptionInput from "../Common/DescriptionInput";
import CopiesRangeInput from "../Common/CopiesRangeInput";
import DarkBlueGradientButton from "../../Common/Buttons/DarkBlueGradientButton";
import PreviewItemCreation from "../Common/PreviewCard/PreviewMintedToken";
import TokenCollectionInput from "../Common/TokenCollectionInput";
import {Optional} from "../../../business-logic/models/types";
import {useFetchUserCollections} from "../../../hooks/collection/useFetchUserCollections";
import SingleRoyaltyInput from "../Common/SingleRoyaltyInput";
import SubmittingModal, {TokenSubmitProps} from "../Common/SubmittingModal";


export interface TSelectedItem {
    id?: string
    name?: string
    reference?: Optional<string>
    icon?: React.ReactNode
}


interface TokenFormFields {
    title: string,
    description: string
    copies: number,
    media?: FileList
    royalty: {
        account: string,
        percent: number
    }
}

const MintTokenForm: React.FC<TAuthProps> = ({
    accountId
}) => {

    const {collections} = useFetchUserCollections(accountId)
    const [selectedCollection, setSelectedCollection] = useState<TSelectedItem>({})
    const [submitProps, setSubmitProps] = useState<TokenSubmitProps>()
    const [previewUrl, setPreviewUrl] = useState('')

    const {
        register,
        watch,
        handleSubmit,
        setError,
        resetField,
        formState: {
            errors,
            isValid
        }
    } = useForm<TokenFormFields>({
        mode: "onChange",
        defaultValues: {
            title: "",
            description: "",
            copies: 1,
            royalty: {
                account: accountId,
                percent: 2
            }
        }
    })

    const onSubmit = useCallback(handleSubmit(fields => {
        const {
            title,
            description,
            royalty,
            copies,
            media
        } = fields

        const isValidPercent = !isNaN(royalty.percent)
        if (!isValidPercent && royalty.account) {
            setError("royalty.percent", {
                message: "Please fill in royalty percent"
            })
            return
        } else if (isValidPercent && !royalty.account) {
            setError("royalty.account", {
                message: "Please fill in royalty account"
            })
            return
        }

        if (!media || media.length === 0) {
            setError("media", {
                message: "Media is required."
            })
            return
        }

        const payouts = royalty.percent && royalty.account
            ? {[royalty.account]: (100 * royalty.percent).toString()}
            : null

        setSubmitProps({
            title,
            accountId,
            description,
            file: media[0],
            previewUrl,
            collectionId: selectedCollection.id,
            collectionName: selectedCollection.name,
            copies,
            traits: {},
            payouts,
        })
    }), [handleSubmit, setError, selectedCollection, previewUrl, accountId])

    const clearImage = useCallback(() => {
        resetField("media")
    }, [resetField])

    const mediaValidationRules = useMemo(() =>
        register("media", {
            required: {
                value: true,
                message: "Media is required"
            },
        }), [register])

    const titleValidationRules = useMemo(() =>
        register("title", {
            required: {
                value: true,
                message: "Title is required."
            },
            maxLength: {
                value: 50,
                message: "Maximum title length is 50 characters"
            }
        }), [register])

    const descriptionValidationRules = useMemo(() =>
        register("description", {
            maxLength: {
                value: 200,
                message: "Maximum description length is 200 characters"
            }
        }), [register])

    const copiesValidationRules = useMemo(() =>
        register("copies", {
            max: 20,
            min: 1
        }), [register])

    const royaltyAccountValidationRules = useMemo(() =>
        register("royalty.account"), [register])

    const royaltyPercentValidationRules = useMemo(() => register("royalty.percent", {
        valueAsNumber: true,
        min: {
            value: 0,
            message: "Royalty must be non negative"
        },
        max: {
            value: 50,
            message: "50% is the maximum amount for royalties"
        }
    }), [register])

    const [title, copies, media] = watch(["title", "copies", "media"])

    useEffect(() => {
        const item = media?.item(0)
        setPreviewUrl(item ? URL.createObjectURL(item) : "")
    }, [media])

    return (
        <div className="flex flex-col lg:flex-row justify-center px-10 gap-8">
            <form className="lg:flex-grow-[4] lg:flex-shrink-0 lg:basis-0 lg:w-[15%] space-y-10"
                  onSubmit={onSubmit}
            >
                <div className="space-y-4">
                    <InputLabel label="Required fields" textSize="xs-2" required={true}/>
                    <UploadImage text="Upload artwork file"
                                 url={previewUrl}
                                 clearImage={clearImage}
                                 mediaError={errors.media?.message}
                                 inputProps={mediaValidationRules}
                    />
                </div>
                <TitleInput placeholder="My NFT"
                            error={errors.title?.message}
                            inputProps={titleValidationRules}

                />
                <DescriptionInput placeholder="Brief description about your NFT"
                                  error={errors.description?.message}
                                  inputProps={descriptionValidationRules}
                />
                <TokenCollectionInput collections={collections}
                                      selectedCollection={selectedCollection}
                                      setSelectedCollection={setSelectedCollection}
                />
                <SingleRoyaltyInput accountInputProps={royaltyAccountValidationRules}
                                    percentInputProps={royaltyPercentValidationRules}
                                    accountError={errors.royalty?.account?.message}
                                    percentError={errors.royalty?.percent?.message}
                />
                {!selectedCollection.id &&
                    <CopiesRangeInput min={1}
                                      max={20}
                                      copies={copies}
                                      inputProps={copiesValidationRules}
                    />
                }
                <div className="min-w-[300px] max-w-[50%]">
                    <DarkBlueGradientButton title="Mint NFT" onClick={onSubmit} disabled={!isValid}/>
                </div>
            </form>
            <PreviewItemCreation title={title}
                                 url={previewUrl}
                                 collectionName={selectedCollection.name}
            />
            {submitProps &&
                <SubmittingModal closeModal={() => setSubmitProps(undefined)}
                                 data={submitProps}
                />
            }
        </div>
    );
};

export default withAuthRedirect(withAuthData(MintTokenForm));