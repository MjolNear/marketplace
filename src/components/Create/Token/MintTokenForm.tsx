import React, {useCallback, useEffect, useState} from 'react';
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import {FormProvider, useForm} from "react-hook-form";
import TitleInput from "../Common/TitleInput";
import DescriptionInput from "../Common/DescriptionInput";
import CopiesRangeInput from "./Inputs/CopiesRangeInput";
import DarkBlueGradientButton from "../../Common/Buttons/DarkBlueGradientButton";
import PreviewItemCreation from "../Common/Preview/PreviewToken";
import TokenCollectionInput from "./Inputs/TokenCollectionInput";
import {Optional} from "../../../@types/Aliases";
import SingleRoyaltyInput from "./Inputs/SingleRoyaltyInput";
import SubmittingModal, {TokenSubmitProps} from "../Common/SubmittingModal";
import TraitsInput from "./Inputs/Traits/TraitsInput";
import UploadTokenImage from "./Inputs/UploadTokenImage";
import {TokenFormFields} from "../../../@types/Form";


export interface TSelectedCollection {
    id?: string
    name?: string
    reference?: Optional<string>
    icon?: React.ReactNode
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

    const {handleSubmit, setError, setValue} = methods

    const onSubmit = useCallback(handleSubmit(fields => {

        const {royalty, media} = fields

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

        const file = media.file

        if (!file) {
            setError("media.file", {
                message: "Media is required"
            })
            return
        }

        const payouts = royalty.percent && royalty.account
            ? {[royalty.account]: (100 * royalty.percent).toString()}
            : null

        setSubmitProps({
            ...fields,
            payload: "token",
            payouts,
            accountId,
            media: {file, url: media.url}
        })
    }), [setError, handleSubmit, accountId, setSubmitProps])

    const [title, mediaUrl, collection] = methods.watch(["title", "media.url", "collection"])

    useEffect(() => {
        if (!collection) {
            setValue("copies", 1)
        }
        setValue("traits", [])
    }, [collection, setValue])

    return (
        <div className="flex flex-col lg:flex-row justify-center px-10 gap-8">
            <FormProvider {...methods}>
                <form className="lg:flex-grow-[4] lg:flex-shrink-0 lg:basis-0 lg:w-[15%] space-y-12"
                      onSubmit={onSubmit}
                >
                    <UploadTokenImage/>
                    <TitleInput placeholder="My NFT"/>
                    <DescriptionInput placeholder="Brief description about your NFT"/>
                    <TokenCollectionInput accountId={accountId}/>
                    {collection && <TraitsInput reference={collection.reference}/>}
                    <SingleRoyaltyInput/>
                    {!collection && <CopiesRangeInput/>}
                    <div className="min-w-[300px] max-w-[50%]">
                        <DarkBlueGradientButton title="Mint NFT"
                                                onClick={onSubmit}
                                                disabled={!methods.formState.isValid || !mediaUrl}
                        />
                    </div>
                </form>
            </FormProvider>
            <PreviewItemCreation title={title}
                                 url={mediaUrl}
                                 collectionName={collection?.name}
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