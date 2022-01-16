import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {PROFILE_TAB, profileSlice} from "../../state/profile/slice";
import {fetchMyNfts} from "../../state/profile/thunk";
import CardGrid from "../../components/CardList/CardGrid";
import CardListLoader from "../../components/Card/CardListLoader";

interface PropTypes {
    accountId: string
}

const ProfileNftsFetch: React.FC<PropTypes> = ({accountId}) => {
    const {nfts, fetching, activeTab} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(fetchMyNfts(accountId))

        return () => {
            dispatch(profileSlice.actions.resetNfts())
        }
    }, [accountId])

    return (
        <>
            {fetching
                ? <CardListLoader/>
                : <CardGrid nfts={activeTab === PROFILE_TAB.LISTED_NFTS
                    ? nfts.filter(nft => nft.price !== null)
                    : nfts
                }/>
            }
        </>
    );
};

export default ProfileNftsFetch;