import React from 'react';

interface TIconTextProps {
    icon: React.ReactNode
    text: React.ReactNode | string
    className?: string
}


const IconText: React.FC<TIconTextProps> = ({
    icon,
    text,
    className = ''
}) => {
    return (
        <div className={"gap-2 flex flex-row items-center " + className}>
            {icon}
            {text}
        </div>
    );
};

export default IconText;