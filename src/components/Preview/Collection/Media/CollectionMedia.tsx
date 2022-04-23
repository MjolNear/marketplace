import React, {memo} from 'react';
import LinkMediaIcon from "./LinkMediaIcon";
import TwitterIcon from "../../../Icons/Media/TwitterIcon";
import DiscordIcon from "../../../Icons/Media/DiscordIcon";
import WebsiteIcon from "../../../Icons/Media/WebsiteIcon";
import TelegramIcon from "../../../Icons/Media/TelegramIcon";
import {CollectionMediaLinks} from "../../../../@types/Collection";



const CollectionMedia: React.FC<CollectionMediaLinks> = ({
    website,
    telegram,
    twitter,
    discord
}) => {
    return (
        <div className="inline-flex gap-5 max-lg:self-center">
            {website && <LinkMediaIcon link={website} icon={<WebsiteIcon size={22}/>}/>}
            {twitter && <LinkMediaIcon link={twitter} icon={<TwitterIcon size={22}/>}/>}
            {telegram && <LinkMediaIcon link={telegram} icon={<TelegramIcon size={22}/>}/>}
            {discord && <LinkMediaIcon link={discord} icon={<DiscordIcon size={22}/>}/>}
        </div>
    );
};

export default memo(CollectionMedia);