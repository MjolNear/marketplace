import React, {useEffect, useMemo, useState} from 'react';
import NftCollectionContainer from "../../../nft-components/NftCollectionContainer";
import mockNFTs from "../../../../api/__mock__";
import NftLoading from "../../../ui/loaders/NftLoading";
import NftItem from "../../../nft-components/NftItem";

const UserNFT = () => {

    // Uncommnet for mocked variant
    // const nfts = mockNFTs();

    const [nfts, setNfts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setNfts(mockNFTs())
            setLoading(false)
        }, 2000)
    }, [])


    // useEffect(() => {
    //     if (window.walletConnection.isSignedIn()) {
    //         getNFTs("a77.near").then(myNFTs => {
    //             for (let nft of myNFTs) {
    //                 nft.then(
    //                     resolve => {
    //                         setNfts(nfts => [...nfts, resolve])
    //                         setLoading(false)
    //                     },
    //                     error => console.log("Error:" + error)
    //                 )
    //             }
    //         })
    //     }
    // }, [])


    const loadings = useMemo(() => Array(12).fill(0), [])

    return (
        <div className="bg-transparent m-10">
            <NftCollectionContainer>
                {isLoading
                    ? loadings.map((i, idx) => <NftLoading key={idx} width={295} height={455}/>)
                    : nfts.map(nft => <NftItem key={nft.token_id} nft={nft}/>)
                }
            </NftCollectionContainer>
        </div>
    );
};

export default UserNFT;