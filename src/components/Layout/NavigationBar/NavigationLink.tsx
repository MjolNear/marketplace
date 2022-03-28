import React from 'react';
import {Link} from "react-router-dom";

export interface NavigationLinkProps {
    icon?: React.ReactNode,
    name: string
    path: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
    icon,
    name,
    path
}) => {
    return (
        <Link to={path}
              className="flex flex-row px-2 py-3 gap-3 text-[15px]
                         opacity-80 hover:opacity-100 rounded-lg transition-all
                         font-archivo hover:bg-mjol-hover-blue items-center">
            {icon}
            <div className="font-bold">{name}</div>
        </Link>
    );
};

export default NavigationLink;