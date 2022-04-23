import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab, profileTabsSlice} from "../../../state/profile/nfts/slice";
import ProfileHistoryFetch from "./ProfileHistoryFetch";
import ProfileNftsFetch from "./ProfileNftsFetch";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import TabsPanel from "../navbar/TabsPanel";
import ProfileMarketTokens from "./ProfileMarketTokens";

const ProfileNftsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"all" | "listed" | "history">("all")

    const dispatch = useAppDispatch()

    useEffect(() => {
        return () => {
            dispatch(profileTabsSlice.actions.reset())
        }
    }, [dispatch])

    const child = useMemo(() => {
        switch (activeTab) {
            case "all":
                return <ProfileNftsFetch/>
            case "listed":
                return <ProfileMarketTokens/>
            case "history":
                return <ProfileHistoryFetch/>
        }
    }, [activeTab])

    return (
        <div className="pb-4 max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="space-y-10 text-center">
                    <DarkBlueTitle title="My NFTs"/>
                    <TabsPanel activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
            </BlueShadowContainer>
            {child}
        </div>
    )
};

export default ProfileNftsPage;