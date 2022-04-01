import React from 'react';
import {useFormContext} from "react-hook-form";
import InputLabel from "../../../Common/Forms/InputLabel";
import BaseInput from "../../../Common/Forms/BaseInput";
import {FaDiscord, FaTelegram, FaTwitter} from "react-icons/fa";
import IconText from "../../../Icons/IconText";
import WebsiteIcon from '../../../Icons/WebsiteIcon';
import QuestionIcon from "../../../Icons/QuestionIcon";
import {CollectionMediaLinksInput} from "../../../../business-logic/types/form";

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
                               <WebsiteIcon size={20} fill="fill-blue-400"/>
                           </div>
                           }
                           error={formState.errors.links?.website?.message}
                           {...register("links.website")}
                />
                <BaseInput placeholder="username"
                           inputPrefix={
                               <IconText text="https://t.me/"
                                         icon={<FaTelegram size={20} color="#2AABEE"/>}
                               />
                           }
                           error={formState.errors.links?.telegram?.message}
                           {...register("links.telegram")}
                />
                <BaseInput placeholder="username"
                           inputPrefix={
                               <IconText text="https://twitter.com/"
                                         icon={<FaTwitter size={20} className="fill-blue-500"/>}
                               />
                           }
                           error={formState.errors.links?.twitter?.message}
                           {...register("links.twitter")}
                />
                <BaseInput placeholder="link"
                           inputPrefix={
                               <IconText text="https://discord.gg/"
                                         icon={<FaDiscord size={20} color="#5865F2"/>}
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