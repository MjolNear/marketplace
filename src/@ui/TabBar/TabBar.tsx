import React from 'react';
import {TabPanelProps} from "./types";
import TabButton from "./TabButton";


const TabBar: React.FC<TabPanelProps> = ({
    tabs,
    activeTab,
    setActiveTab
}) => {
    return (
        <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg sm:justify-center">
            {tabs.map(item => (
                <TabButton
                    key={item}
                    title={item}
                    isActive={item === activeTab}
                    onClick={() => setActiveTab(item)}
                />)
            )}
        </div>
    );
};

export default TabBar;