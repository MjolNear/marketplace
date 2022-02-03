import React from 'react';
import {Disclosure} from "@headlessui/react";


interface PropTypes {
    values: string[]
}

const OptionsPanel: React.FC<PropTypes> = ({values}) => {
    return (
        <Disclosure.Panel className="pt-6">
            <div className="space-y-4">
                {values.map((value, optionIdx) => (
                    <div key={value} className="flex items-center">
                        <input
                            id={`filter-${value}-${optionIdx}`}
                            name={`${value}[]`}
                            defaultValue={value}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor={`filter-${value}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                        >
                            {value}
                        </label>
                    </div>
                ))}
            </div>
        </Disclosure.Panel>
    );
};

export default OptionsPanel;