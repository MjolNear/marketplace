import React from 'react';
import MjolBlueGradientButton from "../../../ui/buttons/MjolBlueGradientButton";
import DarkBlueTitle from "../../../ui/text/DarkBlueTitle";
import BlueShadowContainer from "../../../ui/shadow/BlueShadowContainer";

const ProfileNavigationBar = ({onTabChange, activeTab, tabs}) => {

    const navbar = tabs.map(item =>
        <MjolBlueGradientButton key={item}
                                title={item}
                                isActive={item === activeTab}
                                onClick={() => onTabChange(item)}
        />)

    return (
        <BlueShadowContainer>
            <div className="pb-10 space-y-10">
                <DarkBlueTitle title="My NFTs"/>
                <div className="text-center">
                    <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg"
                    >
                        {navbar}
                    </div>
                </div>
            </div>
        </BlueShadowContainer>
    );
};

export default ProfileNavigationBar;