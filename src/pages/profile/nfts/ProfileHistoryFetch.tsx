import React, {useEffect} from 'react';
import DarkBlueMjolText from "../../../components/Common/Text/DarkBlueMjolText";


interface PropTypes {
    accountId: string
}

const ProfileHistoryFetch: React.FC<PropTypes> = ({accountId}) => {

    useEffect(() => {

    }, [accountId])

    return (
        <DarkBlueMjolText text="History"/>
    );
};

export default ProfileHistoryFetch;