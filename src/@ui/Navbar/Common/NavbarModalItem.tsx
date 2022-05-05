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
        <button className="flex flex-row transition-all p-4 gap-3 text-[15px] rounded-lg items-center
                           font-archivo hover:shadow-mjol-gray-xs hover:bg-mjol-hover"
                onClick={() => {
                    close()
                    navigate(path)
                }}
        >
            {icon}
            <div className="font-semibold text-gray-700">
                {name}
            </div>
        </button>
    );
};

export default NavbarModalItem;