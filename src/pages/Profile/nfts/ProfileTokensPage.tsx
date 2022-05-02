import React, {useEffect, useMemo, useState} from 'react';
import {useAppDispatch} from "../../../hooks/redux";
import {profileTabsSlice} from "../../../state/profile/nfts/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileTokensBlockchainFetch from "./ProfileTokensBlockchainFetch";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import ProfileMarketTokens from "./ProfileMarketTokens";
import {TabBar} from "../../../@ui";

const ProfileTokensPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("ALL")

    const dispatch = useAppDispatch()

    useEffect(() => {
        return () => {
            dispatch(profileTabsSlice.actions.reset())
        }
    }, [dispatch])

    const child = useMemo(() => {
        switch (activeTab) {
            case "ALL":
                return <ProfileTokensBlockchainFetch/>
            case "ON SALE":
                return <ProfileMarketTokens/>
            case "HISTORY":
                return <ProfileHistoryFetch/>
        }
    }, [activeTab])

    return (
        <div className="pb-4 max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="space-y-10 text-center">
                    <DarkBlueTitle title="My NFTs"/>
                    <TabBar.TabBar tabs={["ALL", "ON SALE", "HISTORY"]}
                                   activeTab={activeTab}
                                   setActiveTab={setActiveTab}
                    />
                </div>
            </BlueShadowContainer>
            {child}
        </div>
    )
};

export default ProfileTokensPage;