import React from 'react';

interface PropTypes {
    text: string
    handleToggle: (checked: boolean) => any
    defaultChecked?: boolean
}

const BlueToggle: React.FC<PropTypes> = ({text, handleToggle, defaultChecked = false}) => {
    return (
        <div className="inline-flex items-center">
            <label htmlFor={`blueToggle-${text}`}>
                <div className="relative cursor-pointer">
                    <input type="checkbox" id={`blueToggle-${text}`} className="sr-only"
                           defaultChecked={defaultChecked}
                           onChange={e => handleToggle(e.target.checked)}/>
                    <div
                        className="checkedBackground ring-1 ring-inset w-[56px] h-[28px] rounded-full transition duration-100 ease-linear"/>
                    <div
                        className="dotCheckbox absolute left-[4px] top-[4px] bg-blue-200 w-[20px] h-[20px] rounded-full transition duration-100 ease-linear"/>
                </div>
            </label>
            <div className="ml-2 text-gray-700 font-medium font-archivo">
                {text}
            </div>
        </div>
    );
}

export default BlueToggle;