import React from 'react';
import ProfileAccountBlock from "./ProfileAccountBlock";

interface ProfileSettingsProps {
    accountId: string
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
    accountId
}) => {
    return (
        <div className="flex flex-col">
            <ProfileAccountBlock accountId={accountId}/>
        </div>
    );
};

export default ProfileSettings;