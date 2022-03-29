import React from 'react';

interface PropTypes {
    text: string,
    classes?: string
}

const DarkBlueMjolText = React.memo<PropTypes>(({text, classes = undefined}) => {
    return (
        <div className={
            "text-transparent bg-clip-text bg-gradient-to-bl font-archivo from-blue-500 to-blue-800 " +
            (classes ? classes : "text-center font-extrabold text-sm")
        }>
            {text}
        </div>
    );
});

export default DarkBlueMjolText;