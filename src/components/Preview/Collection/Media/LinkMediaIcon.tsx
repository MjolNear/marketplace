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
        <div className="cursor-not-allowed inline-flex">
            <div className="p-3 group rounded-lg">
                {icon}
            </div>
            {/*<div className="h-full w-[1px] bg-gray-300"/>*/}
        </div>
    );
});

export default LinkMediaIcon;