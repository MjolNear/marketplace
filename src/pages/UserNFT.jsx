import React from 'react';
import NftCollectionContainer from "../components/nfts/NftCollectionContainer";
import NftItem from "../components/nfts/NftItem";
import mockNFTs from "../api/__mock__";

const UserNFT = () => {

    // Uncommnet for mocked variant
    const nfts = mockNFTs();

    // const [nfts, setNfts] = useState([])

    // useEffect(() => {
    //     if (window.walletConnection.isSignedIn()) {
    //         getNFTs("a77.near").then(myNFTs => {
    //             for (let nft of myNFTs) {
    //                 nft.then(
    //                     resolve => setNfts(nfts => [...nfts, resolve]),
    //                     error => console.log("Error:" + error)
    //                 )
    //             }
    //         })
    //     }
    // }, [])

    return (
        <div className="bg-transparent m-10">
            <NftCollectionContainer>
                {nfts.map(nft =>
                    <NftItem key={nft.token_id}
                             nft={nft}/>
                )}
            </NftCollectionContainer>
        </div>
    );
};

export default UserNFT;