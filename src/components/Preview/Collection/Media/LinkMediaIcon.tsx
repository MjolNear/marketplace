import React from 'react';

interface LinkMediaIconProps {
    link: string
    icon: JSX.Element
}

const LinkMediaIcon = React.memo<LinkMediaIconProps>(({
    link,
    icon
}) => {
    const clickableLink = (link.startsWith("http://") || link.startsWith("https://"))
        ? link
        : `//${link}`
    return (
        <a href={clickableLink}
           target="_blank" rel="noreferrer"
           className="hover:opacity-60 flex items-center"
        >
            {icon}
        </a>
    );
});

export default LinkMediaIcon;