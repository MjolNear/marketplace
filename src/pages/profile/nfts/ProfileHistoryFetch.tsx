import React, {useEffect} from 'react';
import DarkBlueMjolText from "../../../components/Common/Text/DarkBlueMjolText";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {profileHistorySlice} from "../../../state/profile/nfts/history/slice";
import {SignedInProps} from "../../../hoc/withAuthData";
import LightBlueGradientText from "../../../components/Common/Text/LightBlueGradientText";


interface PropTypes extends SignedInProps {
}

const ProfileHistoryFetch: React.FC<PropTypes> = ({accountId}) => {

    const dispatch = useAppDispatch()
    const {history, fetching} = useAppSelector(state => state.profile.nfts.history)

    useEffect(() => {
        return () => {
            dispatch(profileHistorySlice.actions.reset())
        }
    }, [accountId])

    return (
        <>{
            history.length === 0
                ? <LightBlueGradientText text="History support would be added soon!" size="lg" fontWeight="bold"/>
                : <DarkBlueMjolText text="History"/>
        }
        </>
    );
};

export default ProfileHistoryFetch;