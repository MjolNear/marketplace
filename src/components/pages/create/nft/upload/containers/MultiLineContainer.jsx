import React from "react";

const MultiLineContainer = (props) => {
    return (
        <div>
            <label className="block text-sm font-bold text-gray-700">
                {props.name}
            </label>
            <div className="mt-1">
                      <textarea
                          id={props.id}
                          name={props.id}
                          rows={props.rows}
                          className="shadow-sm focus:ring-indigo-500 focus:border-cyan-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Brief description for your NFT"
                          defaultValue={''}
                          maxLength={props.maxLength}
                          onChange={(e) => props.setState(e.target.value)}
                      />
            </div>
        </div>
    )
};

export default MultiLineContainer;