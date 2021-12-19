import React from 'react';
import ProfileNavigationBar from "./ui/ProfileNavigationBar";

const Profile = () => {
    return (
        <div className="bg-light_white space-y-10">
            <ProfileNavigationBar/>
            <div className="p-5 text-black text-center text-2xl md:text-5xl font-extrabold text-center">
                Here you can see your NFTs status
            </div>
        </div>
    );
};

export default Profile;