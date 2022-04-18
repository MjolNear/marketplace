import React from 'react';
import BlueAnimatedLink from "../../../Common/Links/BlueAnimatedLink";

interface CollectionItemActivityTabProps {
    prefixLink: string
    activeTab: "items" | "activity"
}

const CollectionItemActivityTab: React.FC<CollectionItemActivityTabProps> = ({
    prefixLink,
    activeTab
}) => {
    return (
        <div className="inline-flex gap-5 font-archivo text-lg font-bold">
            <BlueAnimatedLink to={prefixLink}
                              text="Items"
                              isActive={activeTab === "items"}
            />
            <BlueAnimatedLink to={`${prefixLink}?tab=activity`}
                              text="Activity"
                              isActive={activeTab === 'activity'}
            />
        </div>
    );
};

export default CollectionItemActivityTab;