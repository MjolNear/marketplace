import React from 'react';

const ToggleFilter = ({text}) => {
    return (
        <div className="flex justify-center">
            <div className="form-check form-switch">
                <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                    type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckChecked">Checked
                        switch checkbox input</label>
            </div>
        </div>
    );
};

export default ToggleFilter;