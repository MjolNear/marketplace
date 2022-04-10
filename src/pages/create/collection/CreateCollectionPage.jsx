import React, {useState} from 'react';
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import SingleLineContainer from "../nft/upload/containers/SingleLineContainer";
import MultiLineContainer from "../nft/upload/containers/MultiLineContainer";
import UploadFileInput from "../nft/upload/UploadFileInput";
import {normalizeIpfsLink, storeCollection} from "../../../business-logic/ipfs/upload";
import {createCollection} from "../../../near/api/nfts/mint";
import classNames from "../../../utils/css-utils";
import PropertyInput from "../nft/upload/lines/PropertyInput";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {getCurrentWallet} from "../../../near/wallet/wallet";

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
    const METHOD = 'create_collection';//'add_collection'; 'create_collection';
    const CONTRACT = 'mjol.near';

    const MIN_TITLE_LEN = 3;
    const MAX_TITLE_LEN = 30;
    const MAX_DESC_LEN = 250;
    const MIN_TRAITS_LEN = 1;
    const MAX_TRAITS_LEN = 20;


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fileIcon, setFileIcon] = useState(null);
    const [fileBanner, setFileBanner] = useState(null);
    const [fileTraits, setFileTraits] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [alertText, setAlertText] = useState("");

    const [hasTraits, setHasTraits] = useState(false);
    const [toggleTraits, setToggleTraits] = useState("from UI");
    const [propertiesNum, setPropertiesNum] = useState([["", [""]]]);
    const [fetchProperties, setFetchProperties] = useState(false);
    const changeToggleMode = (newMode) => {
        setPropertiesNum([["", [""]]]);
        setToggleTraits(newMode)
    };
    const addPropertyBlock = () => {
        setPropertiesNum(propertiesNum.concat([["", [""]]]));
        setFetchProperties(!fetchProperties)
    };
    const delPropertyBlock = () => {
        if (propertiesNum.length !== 1) {
            const tmpNum = propertiesNum;
            tmpNum.pop();
            setPropertiesNum(tmpNum);
            setFetchProperties(!fetchProperties)
        }
    };
    const addProperty = (block) => {
        const tmpNum = propertiesNum;
        tmpNum[block][1].push("");
        setPropertiesNum(tmpNum);
        setFetchProperties(!fetchProperties)
    };
    const delProperty = (block) => {
        const tmpNum = propertiesNum;
        if (tmpNum[block][1].length !== 1) {
            tmpNum[block][1].pop();
            setPropertiesNum(tmpNum);
            setFetchProperties(!fetchProperties)
        }
    };
    const setProperty = (blockInd, ind, el) => {
        const tmpNum = propertiesNum;
        if (ind === -1) {
            tmpNum[blockInd][0] = el;
        } else {
            tmpNum[blockInd][1][ind] = el;
        }
        setPropertiesNum(tmpNum);
    };

    const submitForm = (e) => {
        e.preventDefault();

        setAlertText("");
        if (!getCurrentWallet().isSignedIn()) {
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
        if (hasTraits) {
            if (toggleTraits === 'from File') {
                if (fileTraits === null) {
                    setAlertText(`Please upload your traits json file`);
                    return;
                }
                let reader = new FileReader();
                reader.onload = function (event) {
                    let jsonTraits = JSON.parse(event.target.result);
                    setIsLoading(true);
                    storeCollection(title, description, fileIcon, fileBanner, jsonTraits).then(res => {
                        prepareCollection(res)
                        setIsLoading(false);
                    })
                }
                reader.readAsText(fileTraits);
            } else if (toggleTraits === 'from UI') {
                let jsonTraits = {};
                for (let pairObj of propertiesNum) {
                    let key = pairObj[0];
                    let valuesArray = pairObj[1];
                    if (key === "") {
                        setAlertText(`Please fill in all the traits fields or disable collection's NFTs traits`);
                        return
                    }
                    for (let value of valuesArray) {
                        if (value === "") {
                            setAlertText(`Please fill in all the traits fields or disable collection's NFTs traits`);
                            return
                        }
                    }
                    jsonTraits[key] = valuesArray;
                }
                setIsLoading(true);
                storeCollection(title, description, fileIcon, fileBanner, jsonTraits).then(res => {
                    prepareCollection(res);
                    setIsLoading(false);
                })
            }
        } else {
            setIsLoading(true);
            storeCollection(title, description, fileIcon, fileBanner, fileTraits).then(res => {
                prepareCollection(res, fileIcon);
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            })
        }
    }

    const prepareCollection = (res, fileIcon) => {
        const ipfsMedia = normalizeIpfsLink(res.data.image.href, fileIcon.name);
        const ipfsRef = normalizeIpfsLink(res.url);
        const collectionMetadata = {
            title: title,
            contract: CONTRACT,
            desc: description,
            media: ipfsMedia,
            reference: ipfsRef
        }
        createCollection(collectionMetadata, METHOD).finally(() =>
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        )
    }

    return (
        <>
            {isLoading ? (
                <CreateLoader/>
            ) : (
                <div className="bg-white">
                    <BlueShadowContainer>
                        <div className="pb-10 px-4 space-y-8">
                            <DarkBlueTitle title="Create Collection"/>
                        </div>
                    </BlueShadowContainer>
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
                                    <div>
                                        <input id="has-traits" name="has-traits" type="checkbox"
                                               className="focus:ring-indigo-500 h-4 w-4 text-blue-500 border-gray-300"
                                               onChange={e => setHasTraits(e.target.checked)}/>
                                        <label className="mx-1 inline-flex text-sm font-bold text-gray-700">NFTs from
                                            collection have traits</label>
                                    </div>
                                    {hasTraits ? (
                                        <div>
                                            <label className="inline-flex text-sm font-bold text-gray-700">Upload
                                                Traits</label>
                                            <div className="my-1">
                                                <button onClick={() => changeToggleMode("from UI")}
                                                        className={classNames(toggleTraits === "from UI" ? "bg-gray-700 text-white" : "text-gray-700",
                                                            "cursor-pointer inline-flex items-center justify-center px-4 py-1 border text-base font-medium rounded-l-lg border-gray-700")}>
                                                    from UI
                                                </button>
                                                <button onClick={() => changeToggleMode("from File")}
                                                        className={classNames(toggleTraits === "from File" ? "bg-gray-700 text-white" : "text-gray-700",
                                                            "cursor-pointer inline-flex items-center justify-center px-4 py-1 border text-base font-medium rounded-r-lg border-gray-700")}>
                                                    from File
                                                </button>
                                            </div>
                                            {toggleTraits === "from UI" ? (
                                                <div>
                                                    <div className="my-4">
                                                        <button
                                                            type="button"
                                                            id="add"
                                                            onClick={addPropertyBlock}
                                                            className="border px-3 py-1 rounded-md hover:bg-gray-100"
                                                        >
                                                            +
                                                        </button>
                                                        <button
                                                            type="button"
                                                            id="del"
                                                            onClick={delPropertyBlock}
                                                            className="mx-2 border px-3 py-1 rounded-md hover:bg-gray-100"
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                    {propertiesNum.map((curProps, blockInd) => (
                                                        <div className={"border my-4"}>
                                                            <div className={"mx-2 col-span-6 grid grid-cols-6 gap-6"}>
                                                                <PropertyInput name={'Key #' + (blockInd + 1)}
                                                                               type={'text'}
                                                                               text={'e.g. Eyes'}
                                                                               minLength={MIN_TRAITS_LEN}
                                                                               maxLength={MAX_TRAITS_LEN}
                                                                               ind={-1}
                                                                               blockInd={blockInd}
                                                                               setState={setProperty}
                                                                               id={'mint-key-' + blockInd}
                                                                />
                                                                <div className={"col-span-6 sm:col-span-3"}>
                                                                    {curProps[1].map((el, ind) => (
                                                                        <PropertyInput name={'Value #' + (ind + 1)}
                                                                                       type={'text'}
                                                                                       text={'e.g. Green'}
                                                                                       minLength={MIN_TRAITS_LEN}
                                                                                       maxLength={MAX_TRAITS_LEN}
                                                                                       blockInd={blockInd}
                                                                                       ind={ind}
                                                                                       setState={setProperty}
                                                                                       id={'mint-value-' + blockInd + '-' + ind}
                                                                        />
                                                                    ))}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addProperty(blockInd)}
                                                                        className="my-2 border px-3 py-1 rounded-md hover:bg-gray-100"
                                                                    >
                                                                        +
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => delProperty(blockInd)}
                                                                        className="my-2 mx-2 border px-3 py-1 rounded-md hover:bg-gray-100"
                                                                    >
                                                                        -
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <UploadFileInput text=""
                                                                 required={false}
                                                                 type="file"
                                                                 file_text="JSON up to 10MB"
                                                                 accept="application/JSON"
                                                                 state={fileTraits}
                                                                 setState={setFileTraits}
                                                                 id="upload-traits"
                                                />
                                            )
                                            }
                                        </div>) : (
                                        <></>
                                    )}

                                    {alertText !== "" ? (
                                        <LineAlert state={alertText} setState={setAlertText}/>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className="px-4 py-3 text-left sm:px-6">
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
export default withAuthRedirect(CreateCollectionPage);