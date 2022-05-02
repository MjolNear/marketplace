import React from 'react';
import BlueAnimatedLink from "../../../Common/Links/BlueAnimatedLink";

interface CollectionItemActivityTabProps {
    prefixLink: string
    activeTab: "items" | "activity" | "stats"
}

const CollectionTabSwitcher: React.FC<CollectionItemActivityTabProps> = ({
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
                              isActive={activeTab === "activity"}
            />
            {/*<BlueAnimatedLink to={`${prefixLink}?tab=stats`}*/}
            {/*                  text="Stats"*/}
            {/*                  isActive={activeTab === "stats"}*/}
            {/*/>*/}
        </div>
    );
};

export default CollectionTabSwitcher;