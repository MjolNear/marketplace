import React from 'react';

interface LinkMediaIconProps {
    link: string
    icon: JSX.Element
}

const LinkMediaIcon = React.memo<LinkMediaIconProps>(({
    link,
    icon
}) => {
    return (
        <a href={link}
           target="_blank"
           rel="noreferrer"
           className="p-3 hover:bg-gray-900"
        >
            {icon}
        </a>
    );
});

export default LinkMediaIcon;