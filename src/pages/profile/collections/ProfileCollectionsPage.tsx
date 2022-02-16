import React from 'react';
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import ProfileCollectionsFetch from "./ProfileCollectionsFetch";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

const ProfileCollectionsPage = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="pb-10 px-4 space-y-8">
                    <DarkBlueTitle title="My Collections"/>
                </div>
            </BlueShadowContainer>
            <ProfileCollectionsFetch/>
        </div>
    );
};

export default withAuthRedirect(ProfileCollectionsPage);