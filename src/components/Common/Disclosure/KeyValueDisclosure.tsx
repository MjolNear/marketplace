import React from 'react';
import {TAttribute} from "../../Preview/Card/Attributes/AttributeProps";
import KeyValueAttributeList from "../../Preview/Card/Attributes/KeyValueAttributeList";
import IconDisclosureButton, {TIconDisclosureProps} from "./IconDisclosureButton";


interface TKeyValueDisclosureProps extends TIconDisclosureProps {
    attributes: TAttribute[],
    defaultOpen?: boolean
}

const KeyValueDisclosure: React.FC<TKeyValueDisclosureProps> = ({
    name,
    icon,
    defaultOpen,
    attributes
}) => {
    return (
        <IconDisclosureButton icon={icon}
                              name={name}
                              defaultOpen={defaultOpen}
        >
            <KeyValueAttributeList attributes={attributes}/>
        </IconDisclosureButton>
    )
};

export default KeyValueDisclosure;