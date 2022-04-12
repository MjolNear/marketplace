import React, {useCallback, useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab, profileTabsSlice} from "../../../state/profile/nfts/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileNftsFetch from "./ProfileNftsFetch";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import TabsPanel from "../navbar/TabsPanel";
import ProfileMarketTokens from "./ProfileMarketTokens";

const ProfileNftsPage: React.FC = () => {
    const {activeTab, tabs} = useAppSelector(state => state.profile.nfts.tabs)
    const dispatch = useAppDispatch()

    const changeTab = useCallback((tab: ProfileNftsTab) => {
        dispatch(profileTabsSlice.actions.changeTab(tab))
    }, [dispatch])

    useEffect(() => {
        return () => {
            dispatch(profileTabsSlice.actions.reset())
        }
    }, [dispatch])

    const child = useMemo(() => {
        switch (activeTab) {
            case ProfileNftsTab.All:
                return <ProfileNftsFetch/>
            case ProfileNftsTab.Listed:
                return <ProfileMarketTokens/>
            case ProfileNftsTab.History:
                return <ProfileHistoryFetch/>
        }
    }, [activeTab])

    return (
        <div className="pb-4 max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="space-y-10 text-center">
                    <DarkBlueTitle title="My NFTs"/>
                    <TabsPanel tabs={tabs} activeTab={activeTab} changeTab={changeTab}/>
                </div>
            </BlueShadowContainer>
            {child}
        </div>
    )
};

export default ProfileNftsPage;