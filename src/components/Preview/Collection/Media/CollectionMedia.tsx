import React, {memo} from 'react';
import LinkMediaIcon from "./LinkMediaIcon";
import TwitterIcon from "../../../Icons/Media/TwitterIcon";
import DiscordIcon from "../../../Icons/Media/DiscordIcon";
import WebsiteIcon from "../../../Icons/Media/WebsiteIcon";
import TelegramIcon from "../../../Icons/Media/TelegramIcon";
import {CollectionMediaLinks} from "../../../../business-logic/types/collection";



const CollectionMedia: React.FC<CollectionMediaLinks> = ({
    website,
    telegram,
    twitter,
    discord
}) => {
    return (
        <div className="inline-flex absolute bg-white top-0 right-0 ring-gray-300 ring-1
                        xs:rounded-tr-2xl xs:rounded-bl-2xl overflow-hidden"
        >
            {website && <LinkMediaIcon link={website} icon={<WebsiteIcon/>}/>}
            {telegram && <LinkMediaIcon link={telegram} icon={<TelegramIcon/>}/>}
            {twitter && <LinkMediaIcon link={twitter} icon={<TwitterIcon/>}/>}
            {discord && <LinkMediaIcon link={discord} icon={<DiscordIcon/>}/>}
        </div>
    );
};

export default memo(CollectionMedia);