import React from "react";

const OptionInput = (props) => {
    return (
        <select
            id={props.id}
            name={props.name}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-cyan-500 sm:text-sm"
            onChange={(e) => props.setCurValues(props.choosenValues.concat({[props.name]: e.target.value}))}
        >
            {props.values.map(name => (
                <option key={name} value={name}>{name}</option>
            ))}
        </select>
    )
}

export default OptionInput;