import React from 'react';
import BlackLink from "../../Common/Links/BlackLink";

interface PropTypes {
    activeTab: string
}

const ItemsActivity = React.memo<PropTypes>(({activeTab}) => {
    return (
        <div className="inline-flex gap-5 font-archivo text-lg font-bold">
            <BlackLink to="items" text="Items" isActive={activeTab === 'items'}/>
            <BlackLink to="activity" text="Activity" isActive={activeTab === 'activity'}/>
        </div>
    );
});

export default ItemsActivity;