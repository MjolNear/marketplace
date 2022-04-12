import React from 'react';
import BlueShadowContainer from "../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../components/Common/Text/DarkBlueTitle";
import MintTokenForm from "../../components/Create/Token/MintTokenForm";
import MaxWidthWrapper from "../../hoc/MaxWidthWrapper";


const MintTokenPage: React.FC = () => {
    return (
        <div>
            <BlueShadowContainer>
                <div className="pb-10 px-4 space-y-8">
                    <DarkBlueTitle title="Create NFT"/>
                </div>
            </BlueShadowContainer>
            <MaxWidthWrapper>
                <MintTokenForm/>
            </MaxWidthWrapper>
        </div>
    );
};

export default MintTokenPage;