import React from 'react';
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import {useAccountCollections} from "../../../hooks/graphql/collections";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import PaginationCollectionList from "../../../components/CollectionList/PaginationCollectionList";


const ProfileCollectionsFetch: React.FC<TAuthProps> = ({
    accountId
}) => {
    const LIMIT = 24
    const {data,loading, hasMore, onLoadMore} = useAccountCollections(LIMIT, accountId)

    return <PaginationCollectionList collections={data}
                                     hasMore={hasMore}
                                     loading={loading}
                                     onLoadMore={onLoadMore}
                                     isProfileCollections={true}
    />
};

export default withAuthRedirect(withAuthData(ProfileCollectionsFetch));