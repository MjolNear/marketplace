import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchCollection} from "../../../state/preview/collection/thunk";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import Stats from "../../../components/Collection/Stats/Stats";
import CollectionNftList from "./CollectionNftList";
import {previewCollectionSlice} from "../../../state/preview/collection/slice";
import CollectionLogo from "../../../components/Collection/Blocks/CollectionLogo";
import CollectionTitleDescription from "../../../components/Collection/Blocks/CollectionTitleDescription";
import CollectionBanner from "../../../components/Collection/Blocks/CollectionBanner";
import ItemsActivity from "../../../components/Collection/Filters/ItemsActivity";
import CollectionMedia from "../../../components/Collection/Media/CollectionMedia";
import TraitsFilter from "../../../components/Collection/Filters/TraitsFilter";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import BlueToggle from "../../../components/Common/Filters/Toggle/BlueToggle";
import CollectionMarketNftList from "./CollectionMarketNftList";

type CollectionRouteParams = {
    contractId: string,
    collectionId: string,
    filterTab: "Items" | "Activity"
}

const PreviewCollectionPage: React.FC = () => {

    const [marketToggleState, setMarketToggleState] = useState<"init" | "only-market" | "all">("init");
    const {contractId, collectionId, filterTab} = useParams<CollectionRouteParams>()
    const dispatch = useAppDispatch()
    const {collection, fetching} = useAppSelector(state => state.preview.collection)
    const total = useAppSelector(state => state.preview.collection.nftsState.total)

    useEffect(() => {
        if (!collectionId || !contractId) {
            return
        }
        dispatch(fetchCollection(collectionId, contractId))
        return () => {
            dispatch(previewCollectionSlice.actions.reset())
        }
    }, [collectionId, contractId, filterTab, dispatch])

    if (!collectionId || !contractId || !filterTab) {
        return <NotFoundPage/>
    }

    if (fetching && marketToggleState === "init") {
        return <CreateLoader/>
    }

    if (!collection) {
        return <NotFoundPage/>
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
                        <Stats floar={"--"} items={total.toString()} owners={"--"} volume={"--"}/>
                        <CollectionMedia/>
                        <div className="mt-[30px]">
                            <ItemsActivity activeTab={filterTab}/>
                        </div>
                    </div>
                </div>
            </BlueShadowContainer>
            {<>
                {collection.collection_contract === "mjol.near" ? <></> :
                    <div className="flex justify-center pb-10">
                        <BlueToggle text="Buy now"
                                    handleToggle={(() => {
                                        setMarketToggleState(
                                            marketToggleState === "init" || marketToggleState === "only-market"
                                                ? "all"
                                                : "only-market"
                                        )
                                    })}
                                    defaultChecked={marketToggleState === "init" || marketToggleState === "only-market"}/>
                    </div>
                }
                {collection.metadata?.traits
                    ?
                    <>
                        <TraitsFilter traits={collection.metadata?.traits}>
                            <div className="w-full">
                                {marketToggleState === "all" || collection.collection_contract === "mjol.near"
                                    ? <CollectionNftList/>
                                    : <CollectionMarketNftList collectionContract={collection.collection_contract}/>
                                }
                            </div>
                        </TraitsFilter>
                    </>
                    :
                    <>
                        {marketToggleState === "all" || collection.collection_contract === "mjol.near"
                            ? <CollectionNftList/>
                            : <CollectionMarketNftList collectionContract={collection.collection_contract}/>
                        }
                    </>
                }
            </>
            }
        </div>
    );
};

export default PreviewCollectionPage;