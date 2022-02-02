import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab, profileNftsSlice} from "../../../state/profile/nfts/slice";
import {fetchMyNfts} from "../../../state/profile/nfts/thunk";
import CardGrid from "../../../components/CardList/CardGrid";
import CardListLoader from "../../../components/CardList/CardListLoader";
import EmptyCardList from "../../../components/CardList/EmptyCardList";

interface PropTypes {
    accountId: string
}

const ProfileNftsFetch: React.FC<PropTypes> = ({accountId}) => {
    const {nfts, fetching, activeTab} = useAppSelector(state => state.profile.nfts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyNfts(accountId))
        return () => {
            dispatch(profileNftsSlice.actions.resetNfts())
        }
    }, [accountId, dispatch])

    return (
        <>
            {fetching
                ? <CardListLoader/>
                : nfts.length === 0
                    ? <EmptyCardList/>
                    : <CardGrid nfts={
                        activeTab === ProfileNftsTab.Listed
                            ? nfts.filter(nft => nft.price !== null)
                            : nfts
                    }/>
            }
        </>
    );
};

export default ProfileNftsFetch;