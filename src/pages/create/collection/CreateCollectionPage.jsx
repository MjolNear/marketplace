import React, {useState} from 'react';
import RoundLoader from "../../../ui/loaders/RoundLoader";
import BlueShadowContainer from "../../../ui/shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../ui/text/DarkBlueTitle";
import SingleLineContainer from "../nft/upload/containers/SingleLineContainer";
import MultiLineContainer from "../nft/upload/containers/MultiLineContainer";
import OptionInputContainer from "../nft/upload/containers/OptionInputContainer";
import PropertyInput from "../nft/upload/lines/PropertyInput";
import UploadFileInput from "../nft/upload/UploadFileInput";
import {wallet} from "../../../../business-logic/near/enviroment/near";
import exampleJsonFIle from "../../../../resources/traits_example.json";
import {Link} from "react-router-dom";
import {makeNftLink, storeCollection, storeNFT} from "../../../../business-logic/ipfs/upload";
import {createCollection} from "../../../../business-logic/near/api/nfts/mint";

const LineAlert = ({state, setState}) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{state}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     onClick={() => setState("")}>
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1
                    1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1
                    1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                </svg>
            </span>
        </div>
    )
};

const CreateCollectionPage = () => {
    const MIN_TITLE_LEN = 3;
    const MAX_TITLE_LEN = 30;
    const MAX_DESC_LEN = 250;


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fileIcon, setFileIcon] = useState(null);
    const [fileBanner, setFileBanner] = useState(null);
    const [fileTraits, setFileTraits] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [alertText, setAlertText] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        setAlertText("");
        if (!wallet.isSignedIn()) {
            return
        }
        if (!(title.length <= MAX_TITLE_LEN && title.length >= MIN_TITLE_LEN)) {
            setAlertText(`Title length must be between ${MIN_TITLE_LEN} and ${MAX_TITLE_LEN} characters`);
            return
        }
        if (!(description.length <= MAX_DESC_LEN)) {
            setAlertText(`Description length must be less than ${MAX_DESC_LEN} characters`);
            return
        }
        if (fileIcon === null) {
            setAlertText(`Please upload your collection icon file`);
            return
        }

        console.log("Create Collection")
        setIsLoading(true);
        if (fileTraits !== null) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let jsonTraits = JSON.parse(event.target.result);
                storeCollection(title, description, fileIcon, fileBanner, jsonTraits).then(res => {
                    prepareCollection(res)
                    setIsLoading(false);
                })
            }
            reader.readAsText(fileTraits);
        } else {
            storeCollection(title, description, fileIcon, fileBanner, fileTraits).then(res => {
                prepareCollection(res)
                setIsLoading(false);
            })
        }
    }

    const prepareCollection = (res) => {
        console.log(res);
        const ipfsMedia = makeNftLink(res.data.image.href);
        const ipfsBannerMedia = makeNftLink(res.data.bannerImage.href);
        const ipfsRef = makeNftLink(res.url);
        const collectionMetadata = {
            title: title,
            desc: description,
            media: ipfsMedia,
            reference: ipfsRef
        }
        createCollection(collectionMetadata).finally(() =>
            setIsLoading(false)
        )
    }

    return (
        <>
            {isLoading ? (
                <RoundLoader/>
            ) : (
                <div className="bg-mjol-white">
                    <div className="bg-white">
                        <BlueShadowContainer>
                            <div className="pb-10 px-4 space-y-8">
                                <DarkBlueTitle title="Create Collection"/>
                            </div>
                        </BlueShadowContainer>
                    </div>
                    <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6">
                        <form onSubmit={submitForm}>
                            <div className="shadow rounded-md overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 p-6">
                                    <SingleLineContainer name={'Title'}
                                                         required={true}
                                                         text={'e.g. Super Punks'}
                                                         type={'text'}
                                                         minLength={MIN_TITLE_LEN}
                                                         maxLength={MAX_TITLE_LEN}
                                                         id={'collection-title'}
                                                         setState={setTitle}
                                    />
                                    <MultiLineContainer name={'Description'}
                                                        text={'Brief description of your collection'}
                                                        maxLength={MAX_DESC_LEN}
                                                        rows={3}
                                                        id={'сollection-desc'}
                                                        setState={setDescription}
                                    />


                                    <UploadFileInput text="Upload collection's icon image"
                                                     extra_text=" (200x200)"
                                                     required={true}
                                                     type="image"
                                                     file_text="PNG, JPG, GIF up to 10MB"
                                                     accept="image/gif, image/jpeg, image/png"
                                                     state={fileIcon}
                                                     setState={setFileIcon}
                                                     id="upload-icon"
                                    />
                                    <UploadFileInput text="Upload collection's horizontal banner image"
                                                     extra_text=" (1000x300)"
                                                     required={false}
                                                     type="image"
                                                     file_text="PNG, JPG up to 10MB"
                                                     accept="image/gif, image/jpeg, image/png"
                                                     state={fileBanner}
                                                     setState={setFileBanner}
                                                     id="upload-banner"
                                    />
                                    <UploadFileInput text="Upload trait's JSON file"
                                                     required={false}
                                                     type="file"
                                                     file_text="JSON up to 10MB"
                                                     accept="application/JSON"
                                                     state={fileTraits}
                                                     setState={setFileTraits}
                                                     id="upload-traits"
                                    />

                                    {alertText !== "" ? (
                                        <LineAlert state={alertText} setState={setAlertText}/>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-6 font-bold text-lg hover:text-gray-900 font-large rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200 hover:from-green-200 hover:to-mjol-blue-base"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }
        </>
    )
};
export default CreateCollectionPage;