import React from 'react';
import BlackLink from "../../Common/Links/BlackLink";

interface CollectionItemActivityTabProps {
    activeTab: "Items" | "Activity"
}

const CollectionItemActivityTab: React.FC<CollectionItemActivityTabProps> = ({
    activeTab
}) => {
    return (
        <div className="inline-flex gap-5 font-archivo text-lg font-bold">
            <BlackLink to="items" text="Items" isActive={activeTab === "Items"}/>
            {/*<BlackLink to="activity" text="Activity" isActive={activeTab === 'activity'}/>*/}
        </div>
    );
};

export default CollectionItemActivityTab;