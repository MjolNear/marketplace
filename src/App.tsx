import React, {Suspense} from 'react'
import {Route, Routes} from "react-router";
import LandingPage from "./pages/landing/LandingPage";
import NotFound404Page from "./pages/NotFound404";
import PageLayout from "./components/Layout/PageLayout";
import {IndicatorFallback, IndicatorProvider} from "./context/fallback-progress";

const ExploreNftsPage = React.lazy(() => import("./pages/explore/nft/ExploreNftsPage"))
const ExploreCollectionsPage = React.lazy(() => import("./pages/explore/collection/ExploreCollectionsPage"))
const ProfileNftsPage = React.lazy(() => import("./pages/profile/nfts/ProfileNftsPage"))
const ProfileCollectionsPage = React.lazy(() => import("./pages/profile/collections/ProfileCollectionsPage"))
const PreviewCollectionPage = React.lazy(() => import("./pages/preview/collection/PreviewCollectionMatchRouterParams"))
const PreviewNftPage = React.lazy(() => import("./pages/preview/nft/PreviewNftMatchRouterParams"))
const MintTokenPage = React.lazy(() => import("./pages/create/MintTokenPage"))
const MintCollectionPage = React.lazy(() => import("./pages/create/MintCollectionPage"))


export const App: React.FC = () => {
    return (
        <IndicatorProvider>
            <PageLayout>
                <Suspense fallback={<IndicatorFallback/>}>
                    <Routes>
                        <Route path="/">
                            <Route index element={<LandingPage/>}/>
                            <Route path="nfts">
                                <Route index element={<ExploreNftsPage/>}/>
                                <Route path=":contractId/:tokenId" element={<PreviewNftPage/>}/>
                                <Route path="new" element={<MintTokenPage/>}/>
                            </Route>
                            <Route path="collections">
                                <Route index
                                       element={<ExploreCollectionsPage/>}/>
                                <Route path=":collectionId"
                                       element={<PreviewCollectionPage/>}/>
                                <Route path="new" element={<MintCollectionPage/>}/>
                            </Route>
                            <Route path="profile">
                                <Route index element={<NotFound404Page/>}/>
                                <Route path="nfts" element={<ProfileNftsPage/>}/>
                                <Route path="collections" element={<ProfileCollectionsPage/>}/>
                            </Route>
                            <Route path="*" element={<NotFound404Page/>}/>
                        </Route>
                    </Routes>
                </Suspense>
            </PageLayout>
        </IndicatorProvider>
    )
}

export default App;