import React from 'react';

const NavbarSingleButton: React.FC = ({
    children
}) => {
    return (
        <div className="cursor-pointer inline-flex gap-2 items-center group">
            {children}
        </div>
    );
};

export default NavbarSingleButton;