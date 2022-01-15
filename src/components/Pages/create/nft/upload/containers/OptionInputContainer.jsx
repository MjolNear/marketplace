import React from "react";

const OptionInputContainer = (props) => {
    return (
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-bold text-gray-700">
                    {props.name}
                </label>
                <select
                    id={props.id}
                    name={props.id}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-cyan-500 sm:text-sm"
                    onChange={(e) => props.setCurCollection(e.target.value)}
                >
                    {props.myCollections.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
                <p className="mt-2 text-sm text-gray-500">If you want to mint NFT as part of your collection, you can
                    <b className="cursor-pointer"> create it</b>
                </p>
            </div>
        </div>
    )
};

export default OptionInputContainer;