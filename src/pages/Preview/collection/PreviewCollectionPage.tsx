import React, {useState} from 'react';
import NotFound404Page from "../../NotFound404";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import CollectionTitleOwner from "../../../components/Preview/Collection/Blocks/CollectionTitleOwner";
import CollectionLogoAndBanner from "../../../components/Preview/Collection/Blocks/CollectionLogoAndBanner";
import CollectionTabSwitcher from "../../../components/Preview/Collection/Filters/CollectionTabSwitcher";
import CollectionMedia from "../../../components/Preview/Collection/Media/CollectionMedia";
import CreateLoader from "../../../@UI/Loaders/CreateLoader";
import CollectionStatsBox from "../../../components/Preview/Collection/Stats/CollectionStatsBox";
import {useCollectionQuery} from "../../../graphql/generated/collections-graphql";
import {useFetchCollectionTokensSupply} from "../../../hooks/collection/useFetchCollectionTokensSupply";
import CollectionActivity from "./CollectionActivity";
import CollectionDescription from "../../../components/Preview/Collection/Blocks/CollectionDescription";
import CollectionTokens from "./CollectionTokens";
import CollectionStats from "./CollectionStats";

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
            id: collectionId
        }
    })

    const collection = data?.collection

    const {supply} = useFetchCollectionTokensSupply(collection?.contractId, collectionId)

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
                                    lg:items-start items-center lg:justify-between
                                    gap-8 mt-16 mb-12 px-3 xs:px-8"
                    >
                        <div className="lg:min-w-[50%] flex flex-col gap-5 grow">
                            <CollectionTitleOwner title={collection.title} ownerId={collection.ownerId}/>
                            <CollectionDescription description={collection.description}/>
                            <CollectionMedia {...collection.media}/>
                        </div>
                        <CollectionStatsBox contractId={collection.contractId} collectionId={collection.id}/>
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
                                    collectionId={collection.id}
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