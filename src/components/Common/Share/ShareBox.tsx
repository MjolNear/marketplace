import React from 'react';
import {TelegramShareButton, TwitterShareButton} from "react-share";
import {BsTelegram, BsTwitter} from "react-icons/bs";
import imgLogo from "../../../resources/hammer.png";
import {copiedToast} from "../../Layout/Toast";
import ShareRow from "./ShareRow";

interface TShareBoxProps {
    link: string
    close: () => void;
}

const ShareBox: React.FC<TShareBoxProps> = ({
    link,
    close
}) => {
    return (
        <div className="bg-white rounded-lg font-archivo font-bold shadow-mjol-gray-xs overflow-hidden
                       text-gray-800 flex flex-col text-[14px] w-[220px]">
            <div onClick={() => navigator.clipboard.writeText(link)
                .then(close)
                .then(() => copiedToast("Link copied successfully"))}
            >
                <ShareRow icon={<img className="inline-block h-auto w-[20px]" src={imgLogo} alt="logo"/>}
                          text="Copy link"
                />
            </div>
            <TelegramShareButton url={link} onClick={close}>
                <ShareRow icon={<BsTelegram size={20} className="fill-blue-500"/>}
                          text="Share on Telegram"
                />
            </TelegramShareButton>
            <TwitterShareButton url={link} onClick={close}>
                <ShareRow icon={<BsTwitter size={20} className="fill-blue-700"/>}
                          text="Share on Twitter"
                />
            </TwitterShareButton>
        </div>
    );
};

export default ShareBox;