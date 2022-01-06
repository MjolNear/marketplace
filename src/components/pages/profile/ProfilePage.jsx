import React from 'react';
import ProfileNavigationBar from "./navbar/ProfileNavigationBar";

const ProfilePage = ({tabs, activeTab, onTabChange, children}) => {
    return (
        <div className="bg-mjol-white space-y-8 pb-4 min-h-screen">
            <ProfileNavigationBar onTabChange={onTabChange}
                                  activeTab={activeTab}
                                  tabs={tabs}/>

            {children}
        </div>
    );
};

export default ProfilePage;