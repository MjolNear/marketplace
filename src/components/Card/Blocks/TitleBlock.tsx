import React from 'react';

interface TTitleBlockProps {
    title: string,
}

const TitleBlock: React.FC<TTitleBlockProps> = ({title}) => {
    return (
        <div className="font-black font-archivo text-black truncate text-md">
            {title}
        </div>
    );
};

export default TitleBlock;