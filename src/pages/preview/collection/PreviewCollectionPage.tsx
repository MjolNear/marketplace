import React, {useCallback, useState} from 'react';
import NotFound404Page from "../../NotFound404";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import CollectionNftList from "./CollectionNftList";
import CollectionTitleOwner from "../../../components/Preview/Collection/Blocks/CollectionTitleOwner";
import CollectionLogoAndBanner from "../../../components/Preview/Collection/Blocks/CollectionLogoAndBanner";
import CollectionItemActivityTab from "../../../components/Preview/Collection/Filters/CollectionItemActivityTab";
import CollectionMedia from "../../../components/Preview/Collection/Media/CollectionMedia";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import BlueToggle from "../../../components/Common/Filters/Toggle/BlueToggle";
import CollectionMarketNftList from "./CollectionMarketNftList";
import CollectionStats from "../../../components/Preview/Collection/Stats/CollectionStats";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import {TokenSortFilter} from "../../../components/Filter/popup/sort/SortFilter";
import {TokenPriceRange, TokenSortName} from "../../../graphql/types";
import {useCollectionQuery} from "../../../graphql/generated/collections-graphql";
import {useFetchCollectionTokensSupply} from "../../../hooks/collection/useFetchCollectionTokensSupply";
import CollectionActivity from "./CollectionActivity";
import CollectionDescription from "../../../components/Preview/Collection/Blocks/CollectionDescription";

type PreviewCollectionProps = {
    collectionId: string,
    filterTab: "items" | "activity"
}

const PreviewCollectionPage: React.FC<PreviewCollectionProps> = ({
    collectionId,
    filterTab
}) => {

    const [marketToggleState, setMarketToggleState] = useState<"init" | "only-market" | "all">("init");

    const {loading, data} = useCollectionQuery({
        variables: {
            id: collectionId
        }
    })

    const collection = data?.collection

    const {supply} = useFetchCollectionTokensSupply(collection?.contractId, collectionId)

    const [priceRange, setPriceRange] = useState<TokenPriceRange>({})
    const clearPriceRange = useCallback(() => setPriceRange({}), [])

    const [sort, setSort] = useState(TokenSortName.RecentlyAdded)


    if (loading && marketToggleState === "init") {
        return <CreateLoader/>
    }

    if (!collection) {
        return <NotFound404Page/>
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col items-center">
                    <CollectionLogoAndBanner bannerLink={collection.bannerImage}
                                             logoLink={collection.image}
                                             loading={loading}
                    />
                    <div className="flex w-full max-lg:flex-col lg:flex-row
                                    lg:items-start items-center lg:justify-between gap-8 mt-16 mb-12 px-8"
                    >
                        <div className="lg:min-w-[50%] flex flex-col gap-5 grow">
                            <CollectionTitleOwner title={collection.title} ownerId={collection.ownerId}/>
                            <CollectionDescription description={collection.description}/>
                            <CollectionMedia {...collection.media}/>
                        </div>
                        <CollectionStats contractId={collection.contractId} collectionId={collection.id}/>
                    </div>
                    <CollectionItemActivityTab prefixLink={`/collections/${collectionId}`} activeTab={filterTab}/>
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
                            <TokenSortFilter disabled={marketToggleState === "all"}
                                             picked={sort}
                                             setSort={setSort}
                            />
                        </div>
                    </div>
                    <>
                        {marketToggleState === "all"
                            ?
                            <CollectionNftList contractId={collectionId}
                                               collectionId={collection.contractId}
                                               total={supply || 0}
                            />
                            :
                            <CollectionMarketNftList collectionContract={collection.contractId}
                                                     collectionId={collectionId}
                                                     sort={sort}
                                                     priceRange={priceRange}
                            />
                        }
                    </>
                </>
                :
                <CollectionActivity contractId={collection.contractId}
                                    collectionId={collection.id}
                                    collectionName={collection.title}
                />
            }
        </div>
    );
};

export default PreviewCollectionPage;