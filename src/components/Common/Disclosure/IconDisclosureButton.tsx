import React from 'react';
import IconText from "../../Icons/IconText";
import LightBlueDisclosure from "./LightBlueDisclosure";
import {PropsWithChildren} from "../../types";

export interface TIconDisclosureProps {
    name: string,
    icon: React.ReactNode,
    defaultOpen?: boolean
}

const IconDisclosureButton: React.FC<PropsWithChildren<TIconDisclosureProps>> = ({
    name,
    icon,
    defaultOpen,
    children
}) => {

    const content = <IconText icon={icon}
                              text={name}
                              className="group-hover:text-black text-gray-800"
    />

    return (
        <LightBlueDisclosure content={content}
                             defaultOpen={defaultOpen}
        >
            {children}
        </LightBlueDisclosure>
    );
};

export default IconDisclosureButton;