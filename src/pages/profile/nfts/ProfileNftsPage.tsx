import React, {useCallback, useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import withAuthData, {SignedInProps} from "../../../hoc/withAuthData";
import {ProfileNftsTab, profileTabsSlice} from "../../../state/profile/nfts/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileNftsFetch from "./ProfileNftsFetch";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import TabsPanel from "../navbar/TabsPanel";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

interface PropTypes extends SignedInProps {}


const ProfileNftsPage: React.FC<PropTypes> = ({accountId, signedIn}) => {
    const {activeTab, tabs} = useAppSelector(state => state.profile.nfts.tabs)
    const dispatch = useAppDispatch()

    const changeTab = useCallback((tab: ProfileNftsTab) => {
        dispatch(profileTabsSlice.actions.changeTab(tab))
    }, [])

    useEffect(() => {
        return () => {
            dispatch(profileTabsSlice.actions.reset())
        }
    }, [accountId])

    const child = useMemo(() => {
        switch (activeTab) {
            case ProfileNftsTab.All:
            case ProfileNftsTab.Listed:
                return <ProfileNftsFetch accountId={accountId} signedIn={signedIn}/>
            case ProfileNftsTab.History:
                return <ProfileHistoryFetch accountId={accountId} signedIn={signedIn}/>
        }
    }, [activeTab, accountId, signedIn])

    return (
        <div className="pb-4 min-h-screen max-w-screen-2xl mx-auto">
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

export default withAuthRedirect(withAuthData(ProfileNftsPage));