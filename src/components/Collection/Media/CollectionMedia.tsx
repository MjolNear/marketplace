import React from 'react';
import MediaIcon from "./MediaIcon";
import {FaTwitter, FaDiscord, FaInstagram} from "react-icons/fa";

const CollectionMedia = React.memo(() => {
    return (
        <div className="inline-flex gap-4 opacity-50">
            <MediaIcon link="twitter.com" Icon={FaTwitter}/>
            <MediaIcon link="discord.com" Icon={FaDiscord}/>
            <MediaIcon link="instagram.com" Icon={FaInstagram}/>
        </div>
    );
});

export default CollectionMedia;