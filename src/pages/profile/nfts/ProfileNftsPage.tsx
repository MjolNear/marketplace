import React, {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import withAuthData, {SignedInProps} from "../../../hoc/withAuthData";
import {ProfileNftsTab, profileNftsSlice} from "../../../state/profile/nfts/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileNftsFetch from "./ProfileNftsFetch";
import ProfileNavigationBar from "./navbar/ProfileNavigationBar";

interface PropTypes extends SignedInProps {
}


const ProfileFetch: React.FC<PropTypes> = ({accountId}) => {
    const {activeTab, tabs} = useAppSelector(state => state.profile.nfts)
    const dispatch = useAppDispatch()

    const changeTab = (tab: ProfileNftsTab) => {
        dispatch(profileNftsSlice.actions.changeTab(tab))
    }

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
        <div className="space-y-8 pb-4 min-h-screen">
            <ProfileNavigationBar changeTab={changeTab}
                                  activeTab={activeTab}
                                  tabs={tabs}/>

            {child}
        </div>
    )
};

export default withAuthData(ProfileFetch);