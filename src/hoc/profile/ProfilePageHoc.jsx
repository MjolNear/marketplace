import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import withAccountId from "../withAccountId";
import {PROFILE_TAB, profileSlice} from "../../state/profile/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileNftsFetch from "./ProfileNftsFetch";
import ProfilePage from "../../components/pages/profile/ProfilePage";

const ProfileFetch = ({accountId}) => {
    const {activeTab, tabs} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()

    const render = (children) =>
        <ProfilePage tabs={tabs}
                     activeTab={activeTab}
                     onTabChange={tab => dispatch(profileSlice.actions.changeTab(tab))}>
            {children}
        </ProfilePage>

    switch (activeTab) {
        case PROFILE_TAB.ALL_NFTS:
        case PROFILE_TAB.LISTED_NFTS:
            return render(<ProfileNftsFetch accountId={accountId}/>)
        case PROFILE_TAB.HISTORY:
            return render(<ProfileHistoryFetch accountId={accountId}/>)
    }
};

export default withAccountId(ProfileFetch);