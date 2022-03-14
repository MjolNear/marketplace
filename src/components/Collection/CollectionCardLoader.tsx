import React from 'react';

interface PropTypes {
    size?: number,
    className?: string
}

const CollectionCardLoader = React.memo<PropTypes>(({size = 300, ...props}) => {
    const gradient = (direction: string) =>
        `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`

    return (
        <div {...props}>
            <div className="flex flex-col ring-1 rounded-xl ring-gray-200 overflow-hidden pulse-animation w-full
                            transform hover:shadow-mjol-gray-xs hover:ring-inset"
            >
                {/* Image block */}
                <div style={{
                         width: size,
                         height: size,
                         background: gradient('right')
                     }}>
                </div>

                <div className="py-2 px-2 xxs:px-5 space-y-4 mt-2">
                    {/* Title block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: '24px'
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "35%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "20%"
                        }}/>
                    </div>

                    {/* Description block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: "18px"
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "50%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "25%"
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CollectionCardLoader;