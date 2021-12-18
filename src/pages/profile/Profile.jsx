import React from 'react';
import NavigationBar from "./ui/NavigationBar";

const Profile = () => {
    return (
        <div className="bg-light_white space-y-10">
            <NavigationBar/>
            <div className="p-5 text-black text-center text-2xl md:text-5xl font-extrabold text-center">
                Here you can see your NFTs status
            </div>
        </div>
    );
};

export default Profile;