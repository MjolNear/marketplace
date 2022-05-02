import React, {useState} from 'react';
import NotFound404Page from "../../NotFound404";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import CollectionTitleOwner from "../../../components/Preview/Collection/Blocks/CollectionTitleOwner";
import CollectionLogoAndBanner from "../../../components/Preview/Collection/Blocks/CollectionLogoAndBanner";
import CollectionTabSwitcher from "../../../components/Preview/Collection/Filters/CollectionTabSwitcher";
import CollectionMedia from "../../../components/Preview/Collection/Media/CollectionMedia";
import CreateLoader from "../../../@ui/Loaders/CreateLoader";
import CollectionStatsBox from "../../../components/Preview/Collection/Stats/CollectionStatsBox";
import {useCollectionQuery} from "../../../graphql/generated/graphql";
import {useFetchCollectionTokensSupply} from "../../../hooks/collection/useFetchCollectionTokensSupply";
import CollectionActivity from "./CollectionActivity";
import CollectionDescription from "../../../components/Preview/Collection/Blocks/CollectionDescription";
import CollectionTokens from "./CollectionTokens";

type PreviewCollectionProps = {
    collectionId: string,
    filterTab: "items" | "activity" | "stats"
}

const PreviewCollectionPage: React.FC<PreviewCollectionProps> = ({
    collectionId,
    filterTab
}) => {

    const [marketToggleState, setMarketToggleState] = useState<"init" | "only-market" | "all">("init");

    const {loading, data} = useCollectionQuery({
        variables: {
            collectionId
        }
    })

    const collection = data?.collections[0]

    const {supply} = useFetchCollectionTokensSupply(collection?.contractId, collectionId)

    if (loading && marketToggleState === "init") {
        return <CreateLoader/>
    }

    if (!collection) {
        return <NotFound404Page/>
    }

    const floor = collection.floor.length === 0
        ? null
        : collection.floor[0].price

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col items-center">
                    <CollectionLogoAndBanner bannerLink={collection.bannerImage}
                                             logoLink={collection.image}
                                             loading={loading}
                    />
                    <div className="flex w-full max-lg:flex-col lg:flex-row
                                    lg:items-start items-center lg:justify-between
                                    gap-8 mt-16 mb-12 px-3 xs:px-8"
                    >
                        <div className="lg:min-w-[50%] flex flex-col gap-5 grow">
                            <CollectionTitleOwner title={collection.title} ownerId={collection.owner.id}/>
                            <CollectionDescription description={collection.description}/>
                            <CollectionMedia {...collection.media}/>
                        </div>
                        <CollectionStatsBox loading={loading}
                                            floor={floor}
                                            supply={supply}
                                            {...collection.statistics}
                        />
                    </div>
                    <CollectionTabSwitcher prefixLink={`/collections/${collectionId}`} activeTab={filterTab}/>
                </div>
            </BlueShadowContainer>
            {filterTab === 'items' &&
                <CollectionTokens contractId={collection.contractId}
                                  collectionId={collectionId}
                                  supply={supply || 0}
                                  pageState={marketToggleState}
                                  setPageState={setMarketToggleState}
                />
            }
            {filterTab === "activity" &&
                <CollectionActivity contractId={collection.contractId}
                                    collectionId={collection.collectionId}
                                    collectionName={collection.title}
                />

            }
            {/*{filterTab === "stats" &&*/}
            {/*    <CollectionStats contractId={collection.contractId}*/}
            {/*                     collectionId={collectionId}*/}
            {/*    />*/}
            {/*}*/}
        </div>
    );
};

export default PreviewCollectionPage;