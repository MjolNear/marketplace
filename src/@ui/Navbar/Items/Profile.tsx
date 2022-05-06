import React, {useCallback, useEffect, useState} from 'react';
import {getCurrentWallet} from "../../../near/wallet/wallet";
import BlurSliderModal from "../../Modal/BlurSliderModal";
import DefaultUserIcon from "../../../components/Icons/DefaultUserIcon";
import NavbarModalItem from "../Common/NavbarModalItem";
import {MdCollections} from "react-icons/md";
import {AiOutlineAppstore} from "react-icons/ai";
import {GiPaintBrush, GiPalette} from "react-icons/gi";
import {prettyAccount} from "../../../utils/string";
import {formatNearAmount} from "near-api-js/lib/utils/format";
import NearIcon from "../../../components/Icons/near/NearIcon";
import {RiExternalLinkLine} from "react-icons/ri";
import {FaWallet} from "react-icons/fa";

const Profile = () => {

    const isSignedIn = getCurrentWallet().isSignedIn()


    const [isProfileOpened, setIsProfileOpened] = useState(false)
    const [balance, setBalance] = useState('')

    useEffect(() => {
        const getBalance = () => getCurrentWallet()
            .account()
            .state()
            .then(s => formatNearAmount(s.amount, 4))

        if (isSignedIn) {
            getBalance().then(setBalance)
        }
    }, [isSignedIn, setBalance])

    const close = useCallback(() => setIsProfileOpened(false), [setIsProfileOpened])

    return (
        <>
            {isSignedIn
                ?
                <>
                    <button onClick={() => setIsProfileOpened(!isProfileOpened)}
                            className="text-md font-archivo font-bold group
                                       inline-flex justify-end items-center text-gray-600
                                       gap-2
                                       focus:outline-none focus-visible:ring-2
                                       focus-visible:ring-white focus-visible:ring-opacity-75
                                       hover:text-black"
                    >
                        Profile
                        <FaWallet size={16}/>
                    </button>
                    <BlurSliderModal isOpen={isProfileOpened}
                                     close={close}
                    >
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className="font-archivo flex flex-col">
                                <div className="flex flex-col gap-2 mb-3">
                                    <div className="inline-flex items-center gap-2">
                                        <DefaultUserIcon size={20}/>
                                        <div className="font-extrabold text-2xl">
                                            {prettyAccount(getCurrentWallet().getAccountId())}
                                        </div>
                                        <a href={`https://nearblocks.io/address/${getCurrentWallet().getAccountId()}`}
                                           target="_blank"
                                           rel="noreferrer"
                                        >
                                            <RiExternalLinkLine/>
                                        </a>
                                    </div>
                                    <div className="inline-flex gap-2 items-baseline">
                                        <div className="text-mjol-secondary">Balance:</div>
                                        <div className="inline-flex gap-2 items-center">
                                            <div className="text-lg">{balance}</div>
                                            <NearIcon size={16}/>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex flex-col">
                                    <div className="text-mjol-secondary mt-6 mb-2">
                                        Assets
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <NavbarModalItem path="/profile/nfts"
                                                         name="My NFTs"
                                                         close={close}
                                                         icon={<AiOutlineAppstore size={18}/>}
                                        />
                                        <NavbarModalItem path="/profile/collections"
                                                         name="My Collections"
                                                         close={close}
                                                         icon={<MdCollections size={18}/>}
                                        />
                                    </div>
                                    <div className="text-mjol-secondary mt-6 mb-2">
                                        Create
                                    </div>
                                    <div className="flex flex-col justify-start mb-4">
                                        <NavbarModalItem path="/nfts/new"
                                                         name="Create NFT"
                                                         close={close}
                                                         icon={<GiPaintBrush size={18}/>}
                                        />
                                        <NavbarModalItem path="/collections/new"
                                                         name="Create Collection"
                                                         close={close}
                                                         icon={<GiPalette size={18}/>}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="rounded-2xl ring-1 ring-gray-300 text-center py-2 font-archivo
                                               hover:bg-black hover:text-white"
                                    onClick={() => {
                                        close()
                                        getCurrentWallet().signOut()
                                    }}
                            >
                                Sign out
                            </button>
                        </div>
                    </BlurSliderModal>
                </>
                : <button onClick={() => getCurrentWallet().requestSignIn()}
                          className="inline-flex justify-center py-1.5 px-4 font-bold text-md font-bold
                                     rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200
                                     hover:from-green-200 hover:to-mjol-blue-base"
                >
                    Sign in
                </button>
            }
        </>
    );
};

export default Profile;