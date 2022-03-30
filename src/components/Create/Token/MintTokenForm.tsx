import React, {useCallback, useEffect, useState} from 'react';
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import {FormProvider, useForm} from "react-hook-form";
import InputLabel from "../../Common/Forms/InputLabel";
import UploadImage from "../Common/UploadImage";
import TitleInput from "../Common/TitleInput";
import DescriptionInput from "../Common/DescriptionInput";
import CopiesRangeInput from "./CopiesRangeInput";
import DarkBlueGradientButton from "../../Common/Buttons/DarkBlueGradientButton";
import PreviewItemCreation from "../Common/PreviewCard/PreviewMintedToken";
import TokenCollectionInput from "../Common/TokenCollectionInput";
import {Optional} from "../../../business-logic/models/types";
import SingleRoyaltyInput from "./SingleRoyaltyInput";
import SubmittingModal, {TokenSubmitProps} from "../Common/SubmittingModal";
import TraitsInput from "./Traits/TraitsInput";


export interface TSelectedCollection {
    id?: string
    name?: string
    reference?: Optional<string>
    icon?: React.ReactNode
}

export interface SingleTraitInput {
    attribute: string
    value: string
}

export interface TokenFormFields {
    title: string
    description: string
    copies: number
    media: { file?: File, url: string }
    collection: Optional<{ id: string, name: string, reference: Optional<string> }>
    royalty: { account: string, percent: number }
    traits: SingleTraitInput[]
}

const MintTokenForm: React.FC<TAuthProps> = ({
    accountId
}) => {

    const [submitProps, setSubmitProps] = useState<TokenSubmitProps>()

    const methods = useForm<TokenFormFields>({
        mode: "onChange",
        defaultValues: {
            title: "",
            description: "",
            copies: 1,
            traits: [],
            media: {
                url: ""
            },
            royalty: {
                account: accountId,
                percent: 2
            }
        }
    })


    const onSubmit = useCallback(methods.handleSubmit(fields => {

        const {royalty, media} = fields

        const isValidPercent = !isNaN(royalty.percent)
        if (!isValidPercent && royalty.account) {
            methods.setError("royalty.percent", {
                message: "Please fill in royalty percent"
            })
            return
        } else if (isValidPercent && !royalty.account) {
            methods.setError("royalty.account", {
                message: "Please fill in royalty account"
            })
            return
        }

        const file = media.file

        if (!file) {
            methods.setError("media.file", {
                message: "Media is required."
            })
            return
        }

        const payouts = royalty.percent && royalty.account
            ? {[royalty.account]: (100 * royalty.percent).toString()}
            : null

        setSubmitProps({
            ...fields,
            payouts,
            accountId,
            media: {file, url: media.url}
        })
    }), [methods, accountId])


    const [title, mediaUrl, collection] = methods.watch(["title", "media.url", "collection"])

    useEffect(() => {
        if (!collection) {
            methods.setValue("copies", 1)
        }
    }, [collection])


    return (
        <div className="flex flex-col lg:flex-row justify-center px-10 gap-8">
            <FormProvider {...methods}>
                <form className="lg:flex-grow-[4] lg:flex-shrink-0 lg:basis-0 lg:w-[15%] space-y-10"
                      onSubmit={onSubmit}
                >
                    <div className="space-y-4">
                        <InputLabel label="Required fields" textSize="xs-2" required={true}/>
                        <UploadImage label="Upload artwork file"/>
                    </div>
                    <TitleInput placeholder="My NFT"/>
                    <DescriptionInput placeholder="Brief description about your NFT"/>
                    <TokenCollectionInput accountId={accountId}/>
                    {collection && <TraitsInput ipfsReference={collection.reference}/>}
                    <SingleRoyaltyInput/>
                    {!collection && <CopiesRangeInput/>}
                    <div className="min-w-[300px] max-w-[50%]">
                        <DarkBlueGradientButton title="Mint NFT"
                                                onClick={onSubmit}
                                                disabled={!methods.formState.isValid}
                        />
                    </div>
                </form>
            </FormProvider>
            <PreviewItemCreation title={title} url={mediaUrl} collectionName={collection?.name}/>
            {submitProps &&
                <SubmittingModal closeModal={() => setSubmitProps(undefined)}
                                 data={submitProps}
                />
            }
        </div>
    );
};

export default withAuthRedirect(withAuthData(MintTokenForm));