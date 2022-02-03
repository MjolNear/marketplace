import React from 'react';
import DarkBlueTitle from "../../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../../components/Common/Shadow/BlueShadowContainer";
import {ProfileNftsTab} from "../../../../state/profile/nfts/slice";
import BlackUnderlineButton from "../../../../components/Common/Buttons/BlackUnderlineButton";

interface PropTypes {
    tabs: ProfileNftsTab[],
    activeTab: ProfileNftsTab,
    changeTab: (tab: ProfileNftsTab) => void
}

const ProfileNavigationBar: React.FC<PropTypes> = ({changeTab, activeTab, tabs}) => {
    return (
        <BlueShadowContainer>
            <div className="space-y-14 pb-5">
                <DarkBlueTitle title="My NFTs"/>
                <div className="text-center">
                    <div className="inline-flex flex-col gap-2 sm:flex-row sm:gap-5 md:text-lg">
                        {tabs.map(item => (
                            <BlackUnderlineButton
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