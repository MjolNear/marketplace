import React from 'react';
import BlueShadowContainer from "../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../components/Common/Text/DarkBlueTitle";
import MaxWidthWrapper from "../../hoc/MaxWidthWrapper";
import MintCollectionForm from "../../components/Create/Collection/MintCollectionForm";
import {useTxToast} from "../../hooks/useTxToast";

const MintCollectionPage = () => {

    useTxToast()

    return (
        <div>
            <BlueShadowContainer>
                <div className="pb-10 px-4 space-y-8">
                    <DarkBlueTitle title="Create Collection"/>
                </div>
            </BlueShadowContainer>
            <MaxWidthWrapper>
                <MintCollectionForm/>
            </MaxWidthWrapper>
        </div>
    );
};

export default MintCollectionPage;