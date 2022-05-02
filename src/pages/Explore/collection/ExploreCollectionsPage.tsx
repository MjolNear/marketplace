import React, {useState} from "react";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";
import useDebounce from "../../../hooks/useDebounce";
import SearchInput from "../../../components/Filter/search/SearchInput";
import ExploreSearchCollections from "./ExploreSearchCollections";
import ExploreFilterCollections from "./ExploreFilterCollections";
import CollectionListLoader from "../../../components/CollectionList/CollectionListLoader";
import {CardSizeSwitcher} from "../../../context/CardSizeContext";
import FilterWrapper from "../../../components/Filter/FilterWrapper";

const ExploreCollectionsPage = () => {

    const [textQueryFilter, setTextQueryFilter] = useState('')
    const debounceQuery = useDebounce(textQueryFilter, 1000)

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col pb-10 px-4 space-y-8 items-center">
                    <DarkBlueTitle title="Explore Collections"/>
                    <SearchInput placeholder="Search by Collection name, Owner or Contract"
                                 searchQueryText={textQueryFilter}
                                 setSearchQueryText={setTextQueryFilter}
                    />
                </div>
            </BlueShadowContainer>
            <FilterWrapper>
                <CardSizeSwitcher/>
            </FilterWrapper>
            {debounceQuery !== textQueryFilter
                ?
                <div className="py-5">
                    <CollectionListLoader/>
                </div>
                :
                debounceQuery
                    ?
                    <ExploreSearchCollections searchQuery={debounceQuery}/>
                    :
                    <ExploreFilterCollections/>
            }
        </div>
    )
};

export default ExploreCollectionsPage;