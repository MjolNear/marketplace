import React from 'react';

const BaseSelect = React.forwardRef<HTMLSelectElement, React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>(
    (props, ref) => {

        return (
            <select ref={ref}
                    className="hover:bg-mjol-hover"
                    {...props}
            >

            </select>
        );
    });

export default BaseSelect;