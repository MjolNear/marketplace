import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab} from "../../../state/profile/nfts/slice";
import {fetchMyNfts} from "../../../state/profile/nfts/tokens/thunk";
import CardGrid from "../../../components/CardList/CardGrid";
import CardListLoader from "../../../components/CardList/CardListLoader";
import EmptyCardList from "../../../components/CardList/EmptyCardList";
import {profileTokensSlice} from "../../../state/profile/nfts/tokens/slice";
import {SignedInProps} from "../../../hoc/withAuthData";

interface PropTypes extends SignedInProps {
}

const ProfileNftsFetch: React.FC<PropTypes> = ({accountId}) => {
    const activeTab = useAppSelector(state => state.profile.nfts.tabs.activeTab)
    const {nfts, contracts, fetching} = useAppSelector(state => state.profile.nfts.tokens)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyNfts(accountId))
        return () => {
            dispatch(profileTokensSlice.actions.reset())
        }
    }, [accountId])

    const filteredNfts = (activeTab === ProfileNftsTab.Listed
            ? nfts.filter(nft => nft.price !== null)
            : nfts
    ).map(nft => ({
        ...nft,
        mintedInfo: {
            ...nft.mintedInfo,
            verification: contracts[nft.contractId]?.verification || nft.mintedInfo.verification
        }
    }))

    return (
        <>
            {fetching
                ? <CardListLoader/>
                : nfts.length === 0
                    ? <EmptyCardList/>
                    : <CardGrid fetching={fetching} nfts={filteredNfts}/>
            }
        </>
    );
};

export default ProfileNftsFetch;