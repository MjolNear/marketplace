import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {profileCollectionsSlice} from "../../../state/profile/collections/slice";
import {fetchMyCollections} from "../../../state/profile/collections/thunk";
import CollectionListLoader from "../../../components/CollectionList/CollectionListLoader";
import EmptyCollectionList from "../../../components/CollectionList/EmptyCollectionList";
import CollectionList from "../../../components/CollectionList/CollectionList";
import {TAuthProps} from "../../../hoc/withAuthData";


const ProfileCollectionsFetch: React.FC<TAuthProps> = ({
    accountId
}) => {

    const {collections, fetching} = useAppSelector(state => state.profile.collections)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyCollections(accountId))
        return () => {
            dispatch(profileCollectionsSlice.actions.reset())
        }
    }, [accountId, dispatch])

    return (
        <>
            {fetching
                ? <CollectionListLoader/>
                : collections.length === 0
                    ? <EmptyCollectionList/>
                    : <CollectionList collections={collections}/>
            }
        </>
    );
};

export default ProfileCollectionsFetch;