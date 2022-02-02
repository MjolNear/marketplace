import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {fetchCollection} from "../../../state/preview/collection/thunk";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import MjolLoader from "../../../components/Common/Loaders/MjolLoader";
import SquareImageBlock from "../../../components/Card/Blocks/SquareImageBlock";
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import Stats from "../../../components/Preview/Collection/Block/Stats";
import CollectionNftList from "./CollectionNftList";
import {profileCollectionsSlice} from "../../../state/profile/collections/slice";
import {previewCollectionSlice} from "../../../state/preview/collection/slice";

type CollectionRouteParams = {
    collectionId: string
}

const PreviewCollectionPage: React.FC = () => {

    const {collectionId} = useParams<CollectionRouteParams>()
    const dispatch = useAppDispatch()
    const {collection, fetching} = useAppSelector(state => state.preview.collection)

    useEffect(() => {
        if (!collectionId) {
            return
        }
        dispatch(fetchCollection(collectionId))
        return () => {
            dispatch(previewCollectionSlice.actions.reset())
        }
    }, [collectionId, dispatch])

    if (!collectionId) {
        return <NotFoundPage/>
    }

    if (fetching) {
        return <MjolLoader/>
    }
    if (!collection) {
        return <NotFoundPage/>
    }

    return (
        <>
            <BlueShadowContainer>
                <div className="flex flex-col items-center">
                    {collection.metadata.bannerImage &&
                        <img className="w-full h-[250px] object-cover object-top"
                             src={`https://ipfs.io/${collection.metadata.bannerImage.replace(":/", "")}`}
                        />
                    }
                    <div
                        className={"w-[120px] h-[120px] relative " + (collection.metadata.bannerImage ? "-mt-[64px]" : "")}>
                        <SquareImageBlock path={collection.media} className="rounded-full ring-8 ring-white "/>
                    </div>
                    <div className="flex flex-col text-center items-center my-2 space-y-3 px-2">
                        <div className="font-archivo font-black text-5xl">{collection.title}</div>
                        <div className="font-archivo font-bold text-xl opacity-80">{collection.desc}</div>
                    </div>
                    <Stats floar={0.4} listed={50} owners={23} volume={234.54}/>
                </div>
            </BlueShadowContainer>
            <CollectionNftList/>
        </>
    );
};

export default PreviewCollectionPage;