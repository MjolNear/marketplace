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
        <a href={link} target="_blank" rel="noreferrer" className="hover:opacity-60">
            {icon}
        </a>
    );
});

export default LinkMediaIcon;