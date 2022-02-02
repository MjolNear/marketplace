import React from 'react';
import MjolBlueGradientButton from "../../../../components/Common/Buttons/MjolBlueGradientButton";
import DarkBlueTitle from "../../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../../components/Common/Shadow/BlueShadowContainer";
import {ProfileNftsTab} from "../../../../state/profile/nfts/slice";

interface PropTypes {
    tabs: ProfileNftsTab[],
    activeTab: ProfileNftsTab,
    changeTab: (tab: ProfileNftsTab) => void
}

const ProfileNavigationBar: React.FC<PropTypes> = ({changeTab, activeTab, tabs}) => {
    return (
        <BlueShadowContainer>
            <div className="pb-10 space-y-10">
                <DarkBlueTitle title="My NFTs"/>
                <div className="text-center">
                    <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg">
                        {tabs.map(item => (
                            <MjolBlueGradientButton
                                key={item}
                                title={item}
                                isActive={item === activeTab}
                                onClick={() => changeTab(item)}
                            />)
                        )}
                    </div>
                </div>
            </div>
        </BlueShadowContainer>
    );
};

export default ProfileNavigationBar;