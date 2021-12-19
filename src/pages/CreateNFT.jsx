import React, {useState, useEffect} from 'react';
import {mintToCommonCollection} from "../utils/contract-utils";

const UploadFileInput = (props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Upload artwork file</label>
            <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file"
                                   className="sr-only" onChange={(e) => props.setState(e.target.value)}/>
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </div>
    )
};


const MultiLineContainer = (props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {props.name}
            </label>
            <div className="mt-1">
                      <textarea
                          id={props.id}
                          name={props.id}
                          rows={props.rows}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Brief description for your NFT"
                          defaultValue={''}
                          maxLength={props.maxLength}
                          onChange={(e) => props.setState(e.target.value)}
                      />
            </div>
        </div>
    )
};


const SingleCharLine = (props) => {
    return (
        <input
            type={props.type}
            name={props.id}
            id={props.id}
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
            placeholder={props.text}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={(e) => props.setState(e.target.value)}
        />
    );
};


const SingleNumberLine = (props) => {
    return (
        <input
            type={props.type}
            name={props.id}
            id={props.id}
            className="peer focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
            placeholder={props.text}
            min={props.min}
            max={props.max}
            onChange={(e) => props.setState(e.target.value)}
        />

    );
};


const SingleLineContainer = (props) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="sm:col-span-2 col-span-3">
                <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    {props.name}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                    {props.type === 'text' ? (
                        <SingleCharLine name={props.name} text={props.text} type={props.type}
                                        minLength={props.minLength} maxLength={props.maxLength} id={props.id}
                                        setState={props.setState}
                        />
                    ) : (
                        <SingleNumberLine name={props.name} text={props.text} type={props.type} min={props.min}
                                          max={props.max} id={props.id} setState={props.setState}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

const OptionInputContainer = (props) => {
    return (
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                    {props.name}
                </label>
                <select
                    id={props.id}
                    name={props.id}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => props.setCurCollection(e.target.value)}
                >
                    {props.myCollections.map(name => (
                        <option value={name}>{name}</option>
                    ))}
                </select>
                <p className="mt-2 text-sm text-gray-500">If you want to mint NFT as part of your collection, you can
                    <b className="cursor-pointer"> create it</b>
                </p>
            </div>
        </div>
    )
};

const PropertyInput = (props) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-700">
                {props.name}
            </label>
            <input
                type={props.type}
                name={props.id}
                id={props.id}
                maxLength={props.maxLength}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    )
};


const CreateNFT = () => {
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
            (royalty <= MAX_ROYALTY && royalty >= MIN_ROYALTY) //&& (file !== null)
        ){
            const ipfsHash = 'bafybeichhmuw5jzjcos2tacyyry5vijhiur7o2ndyrhejyu4ymamd7kty4';
            if (curCollection === 'None'){
                let token_metadata = {
                    title: title,
                    description: description,
                    media_hash: ipfsHash,
                    copies: 1
                };
                let payout = null;
                if (royalty !== 0){
                    payout = {
                        payout: {}
                    };
                    payout["payout"][window.accountId] = (100 * royalty).toString();
                }
                mintToCommonCollection(token_metadata, payout)
            } else {
                console.log('Only common collection available now')
            }
        }
    };

    useEffect(() => {
        console.log(curCollection);
    }, [curCollection]);

    useEffect(() => {
        console.log(propertiesNum);
    }, [fetchProperties]);


    return (
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
    );
};

export default CreateNFT;