import {useAppSelector} from "../../../hooks/redux";
import React from "react";
import ExploreCollectionList from "../../../components/CollectionList/ExploreCollectionsList";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import SearchInput from "../../../components/Filter/search/SearchInput";

const ExploreCollectionsPage = () => {

    const totalCollections = useAppSelector(state => state.explore.collections.total)

    return (
        <>
            <BlueShadowContainer>
                <div className="pb-10 px-4 space-y-8">
                    <DarkBlueTitle title="Explore Collections"/>
                    <div className="flex justify-center">
                        <SearchInput placeholder="Search by collection name"/>
                    </div>
                </div>
            </BlueShadowContainer>
            <div className="mb-5 font-archivo text-md text-center text-gray-600">
                Total collections: {totalCollections}
            </div>
            <ExploreCollectionList/>
        </>
    )
};

export default ExploreCollectionsPage;