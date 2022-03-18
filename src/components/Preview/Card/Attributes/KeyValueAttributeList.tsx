import React from 'react';
import PreviewAttribute from "./KeyValueAttribute";
import {TAttributeList} from "./AttributeProps";

const KeyValueAttributeList: React.FC<TAttributeList> = ({attributes}) => {
    return (
        <div className="space-y-0.5">
            {attributes.length === 0
                ? <div className="font-archivo">Not found</div>
                : attributes.map(attribute =>
                    <PreviewAttribute key={attribute.name}
                                      name={attribute.name}
                                      value={attribute.value}
                                      tooltip={attribute.tooltip}
                    />
                )}
        </div>
    );
};

export default KeyValueAttributeList;