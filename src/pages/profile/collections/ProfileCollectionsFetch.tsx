import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import withAuthData, {TSignedInProps} from "../../../hoc/withAuthData";
import {profileCollectionsSlice} from "../../../state/profile/collections/slice";
import {fetchMyCollections} from "../../../state/profile/collections/thunk";
import CollectionListLoader from "../../../components/CollectionList/CollectionListLoader";
import EmptyCollectionList from "../../../components/CollectionList/EmptyCollectionList";
import CollectionList from "../../../components/CollectionList/CollectionList";


interface PropTypes extends TSignedInProps {
}

const ProfileCollectionsFetch: React.FC<PropTypes> = ({accountId}) => {

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
            { fetching
                ? <CollectionListLoader/>
                : collections.length === 0
                    ? <EmptyCollectionList/>
                    : <CollectionList collections={collections}/>
            }
        </>
    );
};

export default withAuthData(ProfileCollectionsFetch);