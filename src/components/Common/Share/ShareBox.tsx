import React from 'react';
import {TelegramShareButton, TwitterShareButton} from "react-share";
import {BsTelegram, BsTwitter} from "react-icons/bs";
import imgLogo from "../../../resources/hammer.png";
import {toast} from "react-toastify";

interface TShareBoxProps {
    link: string
    close: () => void;
}

const ShareBox: React.FC<TShareBoxProps> = ({
    link,
    close
}) => {
    return (
        <div className="ring-[1px] ring-blue-100 bg-white shadow-mjol-blue-all-xs rounded-lg
                        font-archivo font-semibold flex flex-col text-[14px] w-[200px] overflow-hidden">
            <div className="flex flex-row items-center gap-4 p-3 w-full hover:bg-gray-100 cursor-pointer"
                 onClick={() => navigator.clipboard.writeText(link)
                     .then(close)
                     .then(() => toast(
                         <div className="font-archivo text-xs-3 font-bold">Link copied</div>,
                         {
                             style: {
                                 height: "20px",
                                 paddingLeft: "10px",
                                 paddingRight: "10px",
                                 borderRadius: "20px"
                             },
                             position: "bottom-right",
                             autoClose: 2000,
                             hideProgressBar: true
                         }))
                 }
            >
                <img className="inline-block h-auto w-[20px]"
                     src={imgLogo}
                     alt="logo"
                />
                Copy link
            </div>
            <TelegramShareButton url={link} onClick={close}>
                <div className="flex flex-row items-center gap-4 p-3 w-full hover:bg-gray-100">
                    <BsTelegram size={20} className="fill-blue-500"/>
                    Share on Telegram
                </div>
            </TelegramShareButton>
            <TwitterShareButton url={link} onClick={close}>
                <div className="flex flex-row items-center gap-4 p-3 w-full hover:bg-gray-100">
                    <BsTwitter size={20} className="fill-blue-700"/>
                    Share on Twitter
                </div>
            </TwitterShareButton>
        </div>
    );
};

export default ShareBox;