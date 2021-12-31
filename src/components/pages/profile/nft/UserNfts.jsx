import React, {useEffect, useMemo, useState} from 'react';
import NftCollectionContainer from "../../../nft-collection/NftCollectionContainer";
import {mockNFTs, mockGetPricesByKeys} from "../../../../business-logic/api/mocks";
import NftLoading from "../../../ui/loaders/NftLoading";
import NftItem from "../../../nft-item/NftItem";
import {getNfts} from "../../../../business-logic/near/get-nfts";

const UserNfts = () => {

    const [nfts, setNfts] = useState([])
    const [isLoading, setLoading] = useState(true)

    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         setNfts(mockNFTs())
    //         setLoading(false)
    //     }, 2000)
    // }, [])


    useEffect(() => {
        if (window.walletConnection.isSignedIn()) {
            getNfts("turk.near").then(myNFTs => {
                for (let nft of myNFTs) {
                    nft.then(
                        resolve => {
                            console.log(resolve)
                            setNfts(nfts => [...nfts, resolve])
                            setLoading(false)
                        },
                        error => console.log("Error:" + error)
                    )
                }
            })
        }
    }, [])


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

export default UserNfts;