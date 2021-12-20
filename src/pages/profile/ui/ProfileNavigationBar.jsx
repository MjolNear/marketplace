import React from 'react';
import DarkButton from "../../../components/ui/buttons/DarkButton";

const ProfileNavigationBar = ({setActiveTab, activeTab, tabItems}) => {
    return (
        <div className="bg-light_white space-y-2 xs:space-y-8 xs:p-2">
            <div
                className="p-2 text-3xl text-center font-extrabold text-transparent bg-clip-text
                           md:text-6xl bg-gradient-to-br from-green-900 to-light_blue">
                My NFTs
            </div>
            <div className="text-center">
                <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg"
                >
                    {tabItems.map(item =>
                        <DarkButton key={item.title}
                                    title={item.title}
                                    isActive={item.title === activeTab}
                                    onClick={() => setActiveTab(item.title)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileNavigationBar;