import {useAppSelector} from "../../../hooks/redux";
import React from "react";
import ExploreCollectionList from "../../../components/CollectionList/ExploreCollectionsList";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";

const ExploreCollectionsPage = () => {

    const totalCollections = useAppSelector(state => state.explore.collections.total)

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="pb-10 px-4 space-y-8">
                    <DarkBlueTitle title="Explore Collections"/>
                    {/*<div className="flex justify-center">*/}
                    {/*    <SearchInput placeholder="Search by collection name"/>*/}
                    {/*</div>*/}
                </div>
            </BlueShadowContainer>
            <div className="mb-5 font-archivo text-md text-center text-gray-600">
                Total collections: {totalCollections}
            </div>
            <ExploreCollectionList/>
        </div>
    )
};

export default ExploreCollectionsPage;