import React from 'react';

const PreviewAttribute = ({name, value}) => {

    let shrinkValue = value
    if (shrinkValue.length > 15) {
        shrinkValue = value.substr(0, 7) + '..' + value.substr(value.length - 7)
    }

    return (
        <div className="flex flex-row justify-between">
            <p>{name}</p>
            <button className="hover:bg-gray-100 p-1 rounded-md" onClick={() => alert("value copied: " + value)}>{shrinkValue}</button>
        </div>
    );
};

export default PreviewAttribute;