import React, {useEffect, useState} from 'react';
import {mintToCommonCollection} from "../../../business-logic/near/api/nfts/mint";
import SingleLineContainer from "./upload/containers/SingleLineContainer";
import MultiLineContainer from "./upload/containers/MultiLineContainer";
import OptionInputContainer from "./upload/containers/OptionInputContainer";
import UploadFileInput from "./upload/UploadFileInput";
import {makeNftLink, storeNFT} from "../../../business-logic/ipfs/upload";
import DarkBlueTitle from "../../../components/Common/text/DarkBlueTitle";
import MjolLoader from "../../../components/Common/loaders/MjolLoader";
import BlueShadowContainer from "../../../components/Common/shadow/BlueShadowContainer";
import {getAccountId, wallet} from "../../../business-logic/near/enviroment/near";
import {getTraitsFromCollectionsLinks} from "../../../business-logic/near/api/collections/get-collections-traits";
import OptionInput from "./upload/lines/OptionInput";
import {collectionAPI} from "../../../business-logic/near/api/collections/api";


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

const CreateNftPage = () => {
    const MIN_TITLE_LEN = 3;
    const MAX_TITLE_LEN = 30;
    const MAX_DESC_LEN = 250;
    const MIN_ROYALTY = 0;
    const MAX_ROYALTY = 50;

    let [myCollections, setMyCollections] = useState([])
    let [collectionTraits, setCollectionTraits] = useState({})
    let [nftTraits, setNftTraits] = useState([])

    const [curCollection, setCurCollection] = useState('None');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [royalty, setRoyalty] = useState(0);
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [alertText, setAlertText] = useState("");

    useEffect(() => {
        if (wallet.isSignedIn()) {
            collectionAPI.fetchUserCollections(getAccountId()).then(myColls => {
                console.log(myColls)
                getTraitsFromCollectionsLinks(myColls).then(traitsDict => {
                    setCollectionTraits(traitsDict)
                })
                setMyCollections([['None', 'None']].concat([].map.call(myColls, (obj) => {
                    console.log(obj.title, obj.collection_id)
                    return [obj.title, obj.collection_id];
                })))
            });
        }
    }, []);

    useEffect(() => {
        console.log("CUR")
        console.log(curCollection)
        setNftTraits([])
    }, [curCollection])


    const preprocessTraits = () => {
        let traits = {}
        for (let dictWithOneKey of nftTraits) {
            let tmpKey = Object.keys(dictWithOneKey)[0];
            if (dictWithOneKey[tmpKey] === 'None'){
                delete traits[tmpKey]
            } else {
                traits[tmpKey] = dictWithOneKey[tmpKey]
            }
        }
        return traits
    }

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
        if (!(royalty <= MAX_ROYALTY && royalty >= MIN_ROYALTY)) {
            setAlertText(`Royalty must be less than ${MAX_ROYALTY}`);
            return
        }
        if (file === null) {
            setAlertText(`Please upload your NFT file`);
            return
        }

        setIsLoading(true);
        storeNFT(title,
            description,
            file,
            preprocessTraits()).then(res => {
            console.log(res);
            const ipfsMedia = makeNftLink(res.data.image.href);
            const ipfsRef = makeNftLink(res.url);
            let token_metadata = {
                title: title,
                description: description,
                media: ipfsMedia,
                reference: ipfsRef,
                copies: 1
            };
            let payout = null;
            if (royalty !== 0) {
                payout = {
                    payout: {}
                };
                payout["payout"][getAccountId()] = (100 * royalty).toString();
            }
            let collectionId = curCollection === 'None' ? null : curCollection;
            mintToCommonCollection(token_metadata, payout, collectionId);
            setIsLoading(false);
        }).catch((e) => {
                setAlertText(`Error: Can't upload file to ipfs, try again or contact to our support`);
                setIsLoading(false);
                console.log(e);
            }
        )


    };


    return (
        <>
            {isLoading ? (
                <MjolLoader size={50}/>
            ) : (
                <div className="bg-mjol-white">
                    <div className="bg-white">
                        <BlueShadowContainer>
                            <div className="pb-10 px-4 space-y-8">
                                <DarkBlueTitle title="Create NFT"/>
                            </div>
                        </BlueShadowContainer>
                    </div>
                    <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6">
                        <form onSubmit={submitForm}>
                            <div className="shadow rounded-md overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 p-6">
                                    <SingleLineContainer name={'Title'}
                                                         required={true}
                                                         text={'My NFT'}
                                                         type={'text'}
                                                         minLength={MIN_TITLE_LEN}
                                                         maxLength={MAX_TITLE_LEN}
                                                         id={'mint-title'}
                                                         setState={setTitle}
                                    />
                                    <MultiLineContainer name={'Description'}
                                                        text={'Brief description for your NFT'}
                                                        maxLength={MAX_DESC_LEN}
                                                        rows={3}
                                                        id={'mint-desc'}
                                                        setState={setDescription}
                                    />
                                    <SingleLineContainer name={'Royalty'}
                                                         text={'Royalties on secondary sales(%), number from 0-50'}
                                                         type={'number'}
                                                         min={MIN_ROYALTY}
                                                         max={MAX_ROYALTY}
                                                         id={'mint-royalty'}
                                                         setState={setRoyalty}
                                    />
                                    <OptionInputContainer name={'Collection of NFT'}
                                                          myCollections={myCollections}
                                                          id={'mint-collection'}
                                                          curCollection={curCollection}
                                                          setCurCollection={setCurCollection}
                                    />
                                    {curCollection !== 'None' && Object.keys(collectionTraits[curCollection]).length > 0 ? (
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700">
                                                Traits:
                                            </label>
                                            <div className="py-2 grid grid-cols-4 gap-4">
                                                {Object.keys(collectionTraits[curCollection]).map(traitKey => (
                                                    <div className={"sm:col-span-1 col-span-4"}>
                                                        <p className={"px-2 text-sm font-bold text-gray-700"}>{traitKey}</p>
                                                        <OptionInput
                                                            name={traitKey}
                                                            values={["None"].concat(collectionTraits[curCollection][traitKey])}
                                                            id={traitKey}
                                                            choosenValues={nftTraits}
                                                            setCurValues={setNftTraits}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    ) : (
                                        <></>
                                    )}
                                    <UploadFileInput text="Upload artwork file"
                                                     required={true}
                                                     type="image"
                                                     file_text="PNG, JPG, GIF up to 10MB"
                                                     accept="image/gif, image/jpeg, image/png"
                                                     state={file}
                                                     setState={setFile}
                                                     id="upload-file"
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
                                        Mint
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

export default CreateNftPage;
