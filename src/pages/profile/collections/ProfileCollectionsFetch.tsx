import React from 'react';
import CollectionListLoader from "../../../components/CollectionList/CollectionListLoader";
import CollectionsGrid from "../../../components/CollectionList/CollectionsGrid";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import EmptyCardList from "../../../components/CardList/EmptyCardList";
import {useAccountCollections} from "../../../hooks/graphql/collections";
import withAuthRedirect from "../../../hoc/withAuthRedirect";


const ProfileCollectionsFetch: React.FC<TAuthProps> = ({
    accountId
}) => {

    const LIMIT = 12

    const {data,loading, hasMore, onLoadMore} = useAccountCollections(LIMIT, accountId)

    return (
        <>
            {loading
                ?
                <CollectionListLoader/>
                :
                data.length === 0
                    ?
                    <EmptyCardList mainDescription="You don’t have any collections yet"
                                   footerDescription="Create the first one"
                                   footerLinkName="here"
                                   footerLink="/collections/new"
                    />
                    :
                    <CollectionsGrid collections={data} loading={loading}/>
            }
        </>
    );
};

export default withAuthRedirect(withAuthData(ProfileCollectionsFetch));