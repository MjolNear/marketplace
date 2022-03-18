import React from 'react';
import IconDisclosureButton, {TIconDisclosureProps} from "./IconDisclosureButton";
import MjolLoader from "../Loaders/MjolLoader";

const LoadingDisclosure: React.FC<TIconDisclosureProps> = ({
    icon,
    name,
    defaultOpen
}) => {
    return (
        <IconDisclosureButton icon={icon}
                              name={name}
                              defaultOpen={defaultOpen}
        >
            <MjolLoader/>
        </IconDisclosureButton>
    );
};

export default LoadingDisclosure;