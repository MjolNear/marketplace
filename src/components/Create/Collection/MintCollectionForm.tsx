import React, {useCallback, useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import TitleInput from "../Common/TitleInput";
import DescriptionInput from "../Common/DescriptionInput";
import DarkBlueGradientButton from "../../Common/Buttons/DarkBlueGradientButton";
import PreviewCollection from "../Common/Preview/PreviewCollection";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import MediaLinksInput from "./Inputs/MediaLinksInput";
import CollectionImageUpload from "./Inputs/CollectionImageUpload";
import CollectionBannerUpload from "./Inputs/CollectionBannerUpload";
import CollectionURLInput from "./Inputs/CollectionURLInput";
import {CollectionFormFields} from "../../../@types/Form";
import CollectionTraitsInput from "./Inputs/Traits/CollectionTraitsInput";
import SubmittingModal, {CollectionSubmitProps} from "../Common/SubmittingModal";


const MintCollectionForm: React.FC<TAuthProps> = ({
    accountId
}) => {

    const [submitProps, setSubmitProps] = useState<CollectionSubmitProps>()

    const methods = useForm<CollectionFormFields>({
        mode: "onChange",
        defaultValues: {
            title: "",
            description: "",
            traits: [],
            links: {},
            banner: {
                url: ""
            },
            media: {
                url: ""
            },
        }
    })

    const {handleSubmit, setError} = methods


    const onSubmit = useCallback(handleSubmit(fields => {

        const {media, banner, links} = fields

        const iconFile = media.file
        const bannerFile = banner.file

        if (!iconFile) {
            setError("media.file", {message: "Icon image is required."})
            return
        }

        if (!bannerFile) {
            setError("banner.file", {message: "Banner image is required"})
            return
        }

        setSubmitProps({
            ...fields,
            accountId,
            banner: {file: bannerFile, url: banner.url},
            media: {file: iconFile, url: media.url},
            payload: "collection",
            links: {
                website: links.website || null,
                telegram: links.telegram ? `https://t.me/${links.telegram}` : null,
                twitter: links.twitter ? `https://twitter.com/${links.twitter}` : null,
                discord: links.discord ? `https://discord.gg/${links.discord}` : null
            }
        })
    }), [handleSubmit, setError, accountId, setSubmitProps])

    const [title, description, mediaUrl, bannerUrl] = methods.watch(["title", "description", "media.url", "banner.url"])

    return (
        <div className="flex flex-col lg:flex-row justify-center px-10 gap-8">
            <FormProvider {...methods}>
                <form className="lg:flex-grow-[4] lg:flex-shrink-0 lg:basis-0 lg:w-[15%] space-y-10"
                      onSubmit={onSubmit}
                >
                    <CollectionImageUpload/>
                    <CollectionBannerUpload/>
                    <TitleInput placeholder="My collection of flowers"/>
                    <DescriptionInput placeholder="Collection of beautiful flowers"
                                      maxChars={400}
                    />
                    <CollectionURLInput/>
                    <CollectionTraitsInput/>
                    <MediaLinksInput/>
                    <div className="min-w-[300px] max-w-[50%]">
                        <DarkBlueGradientButton title="Create collection"
                                                onClick={onSubmit}
                                                disabled={!methods.formState.isValid || !mediaUrl || !bannerUrl}
                        />
                    </div>
                </form>
            </FormProvider>
            <PreviewCollection title={title}
                               mediaUrl={mediaUrl}
                               description={description}
                               ownerId={accountId}
            />
            {submitProps &&
                <SubmittingModal closeModal={() => setSubmitProps(undefined)}
                                 data={submitProps}
                />
            }
        </div>
    );
};

export default withAuthRedirect(withAuthData(MintCollectionForm));