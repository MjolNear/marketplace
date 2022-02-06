import React from 'react';

interface PropTypes {
    link: string,
    imageName: string
}

const PreviewNftImage = React.memo<PropTypes>(({link, imageName}) => {
    return (
        <div className="justify-self-center md:justify-self-end w-full max-w-2xl">
            <img src={link}
                 alt={imageName}
                 className="w-full max-h-xl object-contain"
            />
        </div>
    );
});

export default PreviewNftImage;