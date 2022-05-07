import React from 'react';

const NavbarSingleButton: React.FC = ({
    children
}) => {
    return (
        <div className="cursor-pointer inline-flex gap-2 items-center group max-lg:py-3
                        text-gray-600 text-md font-archivo font-bold"
        >
            {children}
        </div>
    );
};

export default NavbarSingleButton;