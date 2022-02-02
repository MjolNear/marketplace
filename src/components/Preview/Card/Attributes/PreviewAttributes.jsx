import React from 'react';
import PreviewAttribute from "./PreviewAttr";

const PreviewAttributes = ({attributes}) => {
    return (
        <div>
            {attributes.length === 0
                ? <div>Not found</div>
                : attributes.map(attribute =>
                    <PreviewAttribute key={attribute.name}
                                      name={attribute.name}
                                      value={attribute.value}
                    />
                )}
        </div>
    );
};

export default PreviewAttributes;