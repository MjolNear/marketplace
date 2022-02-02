import React from 'react';

interface PropTypes {
    link: string
}

const CollectionLogo: React.FC<PropTypes> = ({link}) => {
    return (
        <img src={link}
             className="rounded-full z-10"
             width={50}
             height={50}
        />
    );
};

export default CollectionLogo;