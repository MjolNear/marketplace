import React from 'react';
import BlackUnderlineButton from "../../../../components/Common/Buttons/BlackUnderlineButton";
import {ProfileNftsTab} from "../../../../state/profile/nfts/slice";

interface PropTypes {
    tabs: ProfileNftsTab[],
    activeTab: ProfileNftsTab,
    changeTab: (tab: ProfileNftsTab) => void
}

const TabsPanel: React.FC<PropTypes> = ({tabs, activeTab, changeTab}) => {
    return (
        <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg sm:justify-center">
            {tabs.map(item => (
                <BlackUnderlineButton
                    key={item}
                    title={item}
                    isActive={item === activeTab}
                    onClick={() => changeTab(item)}
                />)
            )}
        </div>
    );
};

export default TabsPanel;