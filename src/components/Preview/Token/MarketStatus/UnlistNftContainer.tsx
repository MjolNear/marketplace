import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId, TPayouts} from "../../../../business-logic/types/aliases";
import {unlistNft} from "../../../../near/transaction";

interface TUnlistNftProps {
    tokenPrice?: Optional<string>
    tokenId: TokenId,
    contractId: ContractId,
    payouts: TPayouts,
    media?: Optional<string>
}

const UnlistNftContainer: React.FC<TUnlistNftProps> = ({
    tokenPrice,
    contractId,
    tokenId,
    payouts,
    media
}) => {

    const [isUnlisting, setIsUnlisting] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const unlist = () => {
        setIsUnlisting(true)
        unlistNft(contractId, tokenId).finally(() => setIsUnlisting(false))
    }
    // const updatePrice = (price: string) => {
    //     setIsUpdating(true)
    //     return updateNftPrice(contractId, tokenId, price).finally(() => setIsUpdating(false))
    // }


    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <div className="flex flex-col lg:flex-row gap-2">
                <DarkBlueGradientButton title="Unlist NFT"
                                        onClick={unlist}
                                        isLoading={isUnlisting}
                                        disabled={isUpdating}
                />
                {/*<DarkCyanGradientButton title="Update Price"*/}
                {/*                        onClick={() => setVisible(true)}*/}
                {/*                        isLoading={isUpdating}*/}
                {/*                        disabled={isUnlisting}*/}
                {/*/>*/}
                {/*{visible &&*/}
                {/*    <InputPriceModal close={() => setVisible(false)}*/}
                {/*                     onClick={updatePrice}*/}
                {/*                     payouts={payouts}*/}
                {/*                     imgSrc={media}*/}
                {/*                     headerText="Update NFT price"*/}
                {/*    />*/}
                {/*}*/}
            </div>
        </PriceContainer>
    )
};

export default UnlistNftContainer;