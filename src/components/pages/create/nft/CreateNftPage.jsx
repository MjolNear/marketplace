import React, {useState} from 'react';
import {mintToCommonCollection} from "../../../../business-logic/near/contract";
import SingleLineContainer from "./upload/containers/SingleLineContainer";
import MultiLineContainer from "./upload/containers/MultiLineContainer";
import OptionInputContainer from "./upload/containers/OptionInputContainer";
import PropertyInput from "./upload/lines/PropertyInput";
import UploadFileInput from "./upload/UploadFileInput";
import {makeNftLink, storeNFT} from "../../../../business-logic/ipfs/upload";

const CreateNftPage = () => {
    const MIN_TITLE_LEN = 3;
    const MAX_TITLE_LEN = 30;
    const MAX_DESC_LEN = 100;
    const MIN_ROYALTY = 0;
    const MAX_ROYALTY = 50;
    const MIN_PROPS_LEN = 1;
    const MAX_PROPS_LEN = 20;


    let myCollections = ['Collection#1', 'Collection#2', 'Collection#3'];
    myCollections = ['None'].concat(myCollections);

    const [curCollection, setCurCollection] = useState('None');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [royalty, setRoyalty] = useState(0);
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const [propertiesNum, setPropertiesNum] = useState([1]);
    const [fetchProperties, setFetchProperties] = useState(false);
    const addProperty = () => {
        setPropertiesNum(propertiesNum.concat(propertiesNum[propertiesNum.length - 1] + 1));
        setFetchProperties(!fetchProperties);
    };
    const delProperty = () => {
        if (propertiesNum.length !== 1) {
            const tmpNum = propertiesNum;
            tmpNum.pop();
            setPropertiesNum(tmpNum);
            setFetchProperties(!fetchProperties);
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (window.walletConnection.isSignedIn() &&
            (title.length <= MAX_TITLE_LEN && title.length >= MIN_TITLE_LEN) &&
            (description.length <= MAX_DESC_LEN) &&
            (royalty <= MAX_ROYALTY && royalty >= MIN_ROYALTY) && (file !== null)
        ) {
            if (curCollection === 'None') {
                setIsLoading(true);
                storeNFT(title,
                    description,
                    file,
                    {}).then(res => {
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
                        payout["payout"][window.accountId] = (100 * royalty).toString();
                    }
                    mintToCommonCollection(token_metadata, payout);
                    setIsLoading(false);
                })
            } else {
                console.log('Only common collection available now')
            }
        }
    };


    return (
        <>
            {isLoading ? (
                <div className="inset-0 z-50 bg-blue-200 transition-all opacity-100 ease-in-out duration-1000 h-screen"
                     id="page-loader"/>
            ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <form onSubmit={submitForm}>
                        <div className="shadow rounded-md overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 p-6">
                                <SingleLineContainer name={'Title'}
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
                                <OptionInputContainer name={'Collection'}
                                                      myCollections={myCollections}
                                                      id={'mint-collection'}
                                                      curCollection={curCollection}
                                                      setCurCollection={setCurCollection}
                                />
                                {curCollection !== 'None' ? (
                                    <div className="grid grid-cols-6 gap-6">
                                        <label className="col-span-6 text-sm font-medium text-gray-700">
                                            Properties:
                                            <button
                                                type="button"
                                                onClick={addProperty}
                                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                +
                                            </button>
                                            <button
                                                type="button"
                                                onClick={delProperty}
                                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                -
                                            </button>
                                        </label>
                                        {propertiesNum.map(ind => (
                                            <>
                                                <PropertyInput name={'Key #' + ind}
                                                               type={'text'}
                                                               minLength={MIN_PROPS_LEN}
                                                               maxLength={MAX_PROPS_LEN}
                                                               id={'mint-key-' + ind}
                                                />
                                                <PropertyInput name={'Value #' + ind}
                                                               type={'text'}
                                                               minLength={MIN_PROPS_LEN}
                                                               maxLength={MAX_PROPS_LEN}
                                                               id={'mint-value-' + ind}
                                                />
                                            </>
                                        ))}
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <UploadFileInput setState={setFile}/>

                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Mint
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )
            }
        </>
    )
};

export default CreateNftPage;