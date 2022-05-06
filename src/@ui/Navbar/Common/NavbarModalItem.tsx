import React from 'react';
import {useNavigate} from "react-router-dom";

interface NavbarModelLinkProps {
    path: string
    name: string
    close: () => void
    icon?: React.ReactNode
}

const NavbarModalItem: React.FC<NavbarModelLinkProps> = ({
    path,
    name,
    close,
    icon,
}) => {

    const navigate = useNavigate()

    return (
        <button className="flex flex-row transition-all py-3 gap-3 lg:text-[15px] rounded-lg items-center
                           font-archivo group"
                onClick={() => {
                    close()
                    navigate(path)
                }}
        >
            {icon}
            <div className="font-semibold text-gray-700 group-hover:text-black">
                {name}
            </div>
        </button>
    );
};

export default NavbarModalItem;