import React, {memo} from 'react';
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";
import {shortenString} from "../../../../utils/string";

interface CollectionTitleOwnerProps {
    title: string
    ownerId: string
}

const CollectionTitleOwner: React.FC<CollectionTitleOwnerProps> = ({
    title,
    ownerId
}) => {
    return (
        <div className="font-archivo max-lg:text-center max-lg:self-center">
            <div className="text-4xl font-bold"
                 style={{
                     lineHeight: "1.25"
                 }}>
                {title}
            </div>
            <span className="flex flex-row gap-1 text-[15px]">
                <label className="text-gray-600">
                    Created by
                </label>
                <LightBlueGradientText fontWeight="medium"
                                       text={
                                           ownerId.endsWith(".near")
                                               ? ownerId
                                               : shortenString(ownerId, 4, 10)
                                       }/>
            </span>
        </div>
    );
};

export default memo(CollectionTitleOwner);