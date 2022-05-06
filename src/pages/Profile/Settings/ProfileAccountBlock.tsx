import React from 'react';
import {Img} from "react-image";
import LightBlueGradientText from "../../../components/Common/Text/LightBlueGradientText";

const userIcon = require('../../../resources/user-icon.svg')

interface ProfileAccountBlockProps {
    accountId: string
}

const ProfileAccountBlock: React.FC<ProfileAccountBlockProps> = ({
    accountId
}) => {
    return (
        <div className="font-archivo flex flex-row">
            <Img src={userIcon}/>
            <LightBlueGradientText text={accountId}/>
        </div>
    );
};

export default ProfileAccountBlock;