import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import withAuthData, {SignedInProps} from "../../../hoc/withAuthData";
import {ProfileNftsTab, profileTabsSlice} from "../../../state/profile/nfts/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileNftsFetch from "./ProfileNftsFetch";
import ProfileNavigationBar from "./navbar/ProfileNavigationBar";

interface PropTypes extends SignedInProps {
}


const ProfileNftsPage: React.FC<PropTypes> = ({accountId}) => {
    const {activeTab, tabs} = useAppSelector(state => state.profile.nfts.tabs)
    const dispatch = useAppDispatch()

    const changeTab = (tab: ProfileNftsTab) => {
        dispatch(profileTabsSlice.actions.changeTab(tab))
    }

    useEffect(() => {
        return () => {
            dispatch(profileTabsSlice.actions.reset())
        }
    }, [])

    const child = useMemo(() => {
        switch (activeTab) {
            case ProfileNftsTab.All:
            case ProfileNftsTab.Listed:
                return <ProfileNftsFetch accountId={accountId}/>
            case ProfileNftsTab.History:
                return <ProfileHistoryFetch accountId={accountId}/>
        }
    }, [activeTab, accountId])

    return (
        <div className="space-y-8 pb-4 min-h-screen max-w-screen-2xl mx-auto">
            <ProfileNavigationBar changeTab={changeTab}
                                  activeTab={activeTab}
                                  tabs={tabs}/>

            {child}
        </div>
    )
};

export default withAuthData(ProfileNftsPage);