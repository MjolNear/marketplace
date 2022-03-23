import React from 'react';
import BlackLink from "../../../Common/Links/BlackLink";

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
            <BlackLink to={`${prefixLink}/items`}
                       text="Items"
                       isActive={activeTab === "items"}
            />
            <BlackLink to={`${prefixLink}/activity`}
                       text="Activity"
                       isActive={activeTab === 'activity'}
            />
        </div>
    );
};

export default CollectionItemActivityTab;