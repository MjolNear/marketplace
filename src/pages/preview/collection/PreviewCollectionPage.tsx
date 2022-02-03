import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {fetchCollection} from "../../../state/preview/collection/thunk";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import MjolLoader from "../../../components/Common/Loaders/MjolLoader";
import SquareImageBlock from "../../../components/Card/Blocks/SquareImageBlock";
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

type CollectionRouteParams = {
    collectionId: string
    filterTab: "Items" | "Activity"
}

const PreviewCollectionPage: React.FC = () => {

    const {collectionId, filterTab} = useParams<CollectionRouteParams>()
    const dispatch = useAppDispatch()
    const {collection, fetching} = useAppSelector(state => state.preview.collection)
    const total = useAppSelector(state => state.preview.collection.nftsState.total)

    useEffect(() => {
        if (!collectionId) {
            return
        }
        dispatch(fetchCollection(collectionId))
        return () => {
            dispatch(previewCollectionSlice.actions.reset())
        }
    }, [collectionId, dispatch])

    if (!collectionId || !filterTab) {
        return <NotFoundPage/>
    }

    if (fetching) {
        return <MjolLoader/>
    }
    if (!collection) {
        return <NotFoundPage/>
    }

    const hasBanner = !!collection.metadata?.bannerImage

    return (
        <>
            <BlueShadowContainer>
                <div className="flex flex-col items-center">
                    <CollectionBanner bannerLink={collection.metadata?.bannerImage}/>
                    <CollectionLogo hasBanner={hasBanner}
                                    logoLink={collection.media}
                    />
                    <CollectionTitleDescription title={collection.title}
                                                description={collection.desc}
                    />
                    <div className="flex flex-col items-center gap-6 mt-[20px] justify-start">
                        <Stats floar={0.4} items={total} owners={23} volume={234.54}/>
                        <CollectionMedia/>
                        <div className="mt-[30px]">
                            <ItemsActivity activeTab={filterTab}/>
                        </div>
                    </div>
                </div>
            </BlueShadowContainer>
            {
                collection.metadata?.traits
                    ?
                    <TraitsFilter traits={collection.metadata?.traits}>
                        <div className="w-full">
                            <CollectionNftList/>
                        </div>
                    </TraitsFilter>
                    :
                    <CollectionNftList/>
            }
        </>
    );
};

export default PreviewCollectionPage;