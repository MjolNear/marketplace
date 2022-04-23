import React from 'react';
import BlueUnderlineButton from "../../../components/Common/Buttons/BlueUnderlineButton";

interface TabsPanelProps {
    activeTab: "all" | "listed" | "history",
    setActiveTab: (key: ("all" | "listed" | "history")) => void
}

const TabsPanel: React.FC<TabsPanelProps> = ({
    activeTab,
    setActiveTab
}) => {
    const tabs: ("all" | "listed" | "history")[] = ["all", "listed", "history"]
    return (
        <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg sm:justify-center">
            {tabs.map(item => (
                <BlueUnderlineButton
                    key={item}
                    title={item === "all" ? "OWNED" : item === "listed" ? "ON SALE" : "HISTORY"}
                    isActive={item === activeTab}
                    onClick={() => setActiveTab(item)}
                />)
            )}
        </div>
    );
};

export default TabsPanel;