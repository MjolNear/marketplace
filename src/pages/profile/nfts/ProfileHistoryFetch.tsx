import React, {useEffect} from 'react';
import DarkBlueMjolText from "../../../components/Common/Text/DarkBlueMjolText";
import {useAppDispatch} from "../../../hooks/redux";
import {profileHistorySlice} from "../../../state/profile/nfts/history/slice";
import {SignedInProps} from "../../../hoc/withAuthData";


interface PropTypes extends SignedInProps {
}

const ProfileHistoryFetch: React.FC<PropTypes> = ({accountId}) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        return () => {
            dispatch(profileHistorySlice.actions.reset())
        }
    }, [accountId])

    return (
        <DarkBlueMjolText text="History"/>
    );
};

export default ProfileHistoryFetch;