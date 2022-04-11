import React from 'react';
import LinkMediaIcon from "./LinkMediaIcon";
import TwitterIcon from "../../../Icons/Media/TwitterIcon";
import DiscordIcon from "../../../Icons/Media/DiscordIcon";
import WebsiteIcon from "../../../Icons/Media/WebsiteIcon";
import TelegramIcon from "../../../Icons/Media/TelegramIcon";

const CollectionMedia = React.memo(() => {
    return (
        <div className="inline-flex absolute bg-white top-0 right-0
                        xs:rounded-tr-2xl xs:rounded-bl-2xl overflow-hidden"
        >
            <LinkMediaIcon link="website.com" icon={<WebsiteIcon/>}/>
            <LinkMediaIcon link="twitter.com" icon={<TwitterIcon/>}/>
            <LinkMediaIcon link="discord.com" icon={<TelegramIcon/>}/>
            <LinkMediaIcon link="discord.com" icon={<DiscordIcon/>}/>
        </div>
    );
});

export default CollectionMedia;