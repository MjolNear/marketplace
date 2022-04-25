import React, {Suspense} from 'react'
import {Route, Routes} from "react-router";
import LandingPage from "./pages/Landing/LandingPage";
import NotFound404Page from "./pages/NotFound404";
import PageLayout from "./components/Layout/PageLayout";
import {IndicatorFallback, IndicatorProvider} from "./context/fallback-progress";

const ExploreNftsPage = React.lazy(() => import("./pages/Explore/nft/ExploreNftsPage"))
const ExploreCollectionsPage = React.lazy(() => import("./pages/Explore/collection/ExploreCollectionsPage"))
const ProfileTokensPage = React.lazy(() => import("./pages/Profile/nfts/ProfileTokensPage"))
const ProfileCollectionsPage = React.lazy(() => import("./pages/Profile/collections/ProfileCollectionsPage"))
const PreviewCollectionPage = React.lazy(() => import("./pages/Preview/collection/PreviewCollectionMatchRouterParams"))
const PreviewNftPage = React.lazy(() => import("./pages/Preview/nft/PreviewNftMatchRouterParams"))
const MintTokenPage = React.lazy(() => import("./pages/Create/MintTokenPage"))
const MintCollectionPage = React.lazy(() => import("./pages/Create/MintCollectionPage"))


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
                                <Route path="nfts" element={<ProfileTokensPage/>}/>
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