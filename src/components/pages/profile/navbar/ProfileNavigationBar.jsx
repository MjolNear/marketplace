import React from 'react';
import MjolHoverBlackButton from "../../../ui/buttons/MjolHoverBlackButton";
import DarkBlueTitle from "../../../ui/text/DarkBlueTitle";

const ProfileNavigationBar = ({onChangeTab, activeTab, tabs}) => {

    const navbar = tabs.map(item =>
        <MjolHoverBlackButton key={item.name}
                              title={item.name}
                              isActive={item.name === activeTab}
                              onClick={() => onChangeTab(item.name)}
        />)

    return (
        <div className="bg-white shadow-mjol-base-blue-xl pb-10 space-y-10">
            <DarkBlueTitle title="My NFTs"/>
            <div className="text-center">
                <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg"
                >
                    {navbar}
                </div>
            </div>
        </div>
    );
};

export default ProfileNavigationBar;