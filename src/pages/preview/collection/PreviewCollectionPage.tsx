import React, {useCallback, useState} from 'react';
import NotFound404Page from "../../NotFound404";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import CollectionNftList from "./CollectionNftList";
import CollectionLogo from "../../../components/Preview/Collection/Blocks/CollectionLogo";
import CollectionTitleDescription from "../../../components/Preview/Collection/Blocks/CollectionTitleDescription";
import CollectionBanner from "../../../components/Preview/Collection/Blocks/CollectionBanner";
import CollectionItemActivityTab from "../../../components/Preview/Collection/Filters/CollectionItemActivityTab";
import CollectionMedia from "../../../components/Preview/Collection/Media/CollectionMedia";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import BlueToggle from "../../../components/Common/Filters/Toggle/BlueToggle";
import CollectionMarketNftList from "./CollectionMarketNftList";
import {useFetchCollection} from "../../../hooks/collection/useFetchCollection";
import CollectionStats from "../../../components/Preview/Collection/Stats/CollectionStats";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import SortFilter from "../../../components/Filter/popup/sort/SortFilter";
import {TokenPriceRange, TokenSortName} from "../../../graphql/utils";

type PreviewCollectionProps = {
    contractId: string,
    collectionId: string,
    filterTab: "items" | "activity"
}

const PreviewCollectionPage: React.FC<PreviewCollectionProps> = ({
    contractId,
    collectionId,
    filterTab
}) => {

    const [marketToggleState, setMarketToggleState] = useState<"init" | "only-market" | "all">("init");

    const {fetching, collection, stats} = useFetchCollection(contractId, collectionId)

    const [priceRange, setPriceRange] = useState<TokenPriceRange>({})
    const clearPriceRange = useCallback(() => setPriceRange({}), [])

    const [sort, setSort] = useState(TokenSortName.RecentlyAdded)


    if (fetching && marketToggleState === "init") {
        return <CreateLoader/>
    }

    if (!collection) {
        return <NotFound404Page/>
    }

    const hasBanner = !!collection.metadata?.bannerImage

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col items-center">
                    <CollectionBanner bannerLink={collection?.metadata?.bannerImage}/>
                    <CollectionLogo hasBanner={hasBanner}
                                    logoLink={collection.media}
                    />
                    <CollectionTitleDescription title={collection.title}
                                                description={collection.desc}
                    />
                    <div className="flex flex-col items-center gap-6 mt-[20px] justify-start">
                        <CollectionStats {...stats}/>
                        <CollectionMedia/>
                        <div className="mt-[30px]">
                            <CollectionItemActivityTab prefixLink={`/collections/${contractId}/${collectionId}`}
                                                       activeTab={filterTab}
                            />
                        </div>
                    </div>
                </div>
            </BlueShadowContainer>
            {filterTab === 'items' ?
                <>
                    <div className="inline-flex flex-wrap gap-20 w-full justify-center mb-2">

                        <BlueToggle text="Buy now"
                                    handleToggle={(() => {
                                        setMarketToggleState(
                                            marketToggleState === "init" || marketToggleState === "only-market"
                                                ? "all"
                                                : "only-market"
                                        )
                                    })}
                                    defaultChecked={marketToggleState === "init" || marketToggleState === "only-market"}
                        />
                        <div className="inline-flex gap-5">
                            <PriceRangeFilter
                                disabled={marketToggleState === "all"}
                                onClear={clearPriceRange}
                                onApply={setPriceRange}
                            />
                            <SortFilter disabled={marketToggleState === "all"}
                                        picked={sort}
                                        setSort={setSort}
                            />
                        </div>
                    </div>

                    {/*{collection.metadata?.traits*/}
                    {/*    ?*/}
                    {/*    <>*/}
                    {/*        <TraitsFilter traits={collection.metadata?.traits}>*/}
                    {/*            <div className="w-full">*/}
                    {/*                {marketToggleState === "all" || collection.collection_contract === "mjol.near"*/}
                    {/*                    ? <CollectionNftList/>*/}
                    {/*                    : <CollectionMarketNftList collectionContract={collection.collection_contract}/>*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*        </TraitsFilter>*/}
                    {/*    </>*/}
                    {/*    :*/}
                    <>
                        {marketToggleState === "all"
                            ?
                            <CollectionNftList contractId={collectionId}
                                               collectionId={contractId}
                                               total={stats.supply || 0}
                            />
                            :
                            <CollectionMarketNftList collectionContract={contractId}
                                                     collectionId={collectionId}
                                                     sort={sort}
                                                     priceRange={priceRange}
                            />
                        }
                    </>
                </>
                :
                <div className="text-center text-xl font-archivo font-semibold text-blue-500">
                    Collections activity will be added soon!
                </div>
            }
        </div>
    );
};

export default PreviewCollectionPage;