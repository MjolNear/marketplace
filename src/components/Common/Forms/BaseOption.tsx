import React from 'react';

const BaseOption: React.FC<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>
    = props => {
    return (
        <option className="hover:bg-mjol-hover hover:shadow-mjol-gray"
                {...props}
        >

        </option>
    );
};

export default BaseOption;