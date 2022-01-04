import React from 'react';
import PreviewAttribute from "./PreviewAttribute";

const PreviewAttributes = ({attributes}) => {

    if (attributes.length === 0) {
        return <div>Not found</div>
    }

    return (
        <div>
            {attributes.map(attribute =>
                <PreviewAttribute key={attribute.name}
                                  name={attribute.name}
                                  value={attribute.value}
                />
            )}
        </div>
    );
};

export default PreviewAttributes;