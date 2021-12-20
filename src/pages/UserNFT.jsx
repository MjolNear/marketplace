import React, {useEffect, useState} from 'react';
import NftCollectionContainer from "../components/nfts/NftCollectionContainer";
import mockNFTs from "../api/__mock__";
import NftLoading from "../components/ui/loaders/NftLoading";
import NftItem from "../components/nfts/NftItem";
import {getNFTs} from "../utils/get-nfts";

const UserNFT = () => {

    // Uncommnet for mocked variant
    // const nfts = mockNFTs();

    const [nfts, setNfts] = useState([])
    const [isLoading, setLoading] = useState(true)

    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         setNfts(mockNFTs())
    //         setLoading(false)
    //     }, 3000)
    // }, [])


    useEffect(() => {
        if (window.walletConnection.isSignedIn()) {
            getNFTs("a77.near").then(myNFTs => {
                for (let nft of myNFTs) {
                    nft.then(
                        resolve => {
                            setNfts(nfts => [...nfts, resolve])
                            setLoading(false)
                        },
                        error => console.log("Error:" + error)
                    )
                }
            })
        }
    }, [])

    const loadings = Array(12).fill(0);

    console.log(loadings)

    return (
        <div className="bg-transparent m-10">
            <NftCollectionContainer>
                {isLoading
                    ? loadings.map(i => <NftLoading width={290} height={455}/>)
                    : nfts.map(nft => <NftItem key={nft.token_id} nft={nft}/>)
                }
            </NftCollectionContainer>
        </div>
    );
};

export default UserNFT;