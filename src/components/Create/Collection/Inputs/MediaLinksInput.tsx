import React from 'react';
import {useFormContext} from "react-hook-form";
import {InputLabel, BaseInput} from "../../../../@UI/Forms";
import IconText from "../../../Icons/IconText";
import QuestionIcon from "../../../Icons/QuestionIcon";
import {CollectionMediaLinksInput} from "../../../../@types/Form";
import {TelegramIcon, TwitterIcon, DiscordIcon, WebsiteIcon} from "../../../Icons/Media";


const MediaLinksInput = () => {

    const {register, formState} = useFormContext<{ links: CollectionMediaLinksInput }>()

    return (
        <div>
            <InputLabel label="Media links"
                        description="Provide additional media links for your collection"
                        descriptionTooltip={<QuestionIcon
                            dataFor="collectionLinksInputTooltip"
                            dataTip="External links helps the collection creators to promote them"/>
                        }
            />
            <div className="space-y-3">
                <BaseInput placeholder="website.com"
                           inputPrefix={<div className="mr-1.5">
                               <WebsiteIcon/>
                           </div>
                           }
                           error={formState.errors.links?.website?.message}
                           {...register("links.website")}
                />
                <BaseInput placeholder="username"
                           inputPrefix={
                               <IconText text="https://t.me/"
                                         icon={<TelegramIcon/>}
                               />
                           }
                           error={formState.errors.links?.telegram?.message}
                           {...register("links.telegram")}
                />
                <BaseInput placeholder="username"
                           inputPrefix={
                               <IconText text="https://twitter.com/"
                                         icon={<TwitterIcon/>}
                               />
                           }
                           error={formState.errors.links?.twitter?.message}
                           {...register("links.twitter")}
                />
                <BaseInput placeholder="link"
                           inputPrefix={
                               <IconText text="https://discord.gg/"
                                         icon={<DiscordIcon/>}
                               />
                           }
                           error={formState.errors.links?.discord?.message}
                           {...register("links.discord")}
                />
            </div>
        </div>
    );
};

export default MediaLinksInput;