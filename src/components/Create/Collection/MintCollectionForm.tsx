import React, {useCallback} from 'react';
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
import {CollectionFormFields} from "../../../business-logic/types/form";


const MintCollectionForm: React.FC<TAuthProps> = ({
    accountId
}) => {

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
        const file = fields.media.file
        if (!file) {
            setError("media.file", { message: "Media is required."})
        }
    }), [handleSubmit])

    const [title, description, mediaUrl] = methods.watch(["title", "description", "media.url"])

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
                    <MediaLinksInput/>
                    <div className="min-w-[300px] max-w-[50%]">
                        <DarkBlueGradientButton title="Create collection"
                                                onClick={onSubmit}
                                                disabled={!methods.formState.isValid || !mediaUrl}
                        />
                    </div>
                </form>
            </FormProvider>
            <PreviewCollection title={title}
                               mediaUrl={mediaUrl}
                               description={description}
                               ownerId={accountId}
            />
        </div>
    );
};

export default withAuthRedirect(withAuthData(MintCollectionForm));