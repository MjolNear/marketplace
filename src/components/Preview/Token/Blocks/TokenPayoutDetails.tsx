import React, { memo } from 'react';
import {TAttribute} from "../Attributes/AttributeProps";
import {GrMoney} from "react-icons/gr";
import {TokenPayouts} from "../../../../@types/Aliases";
import IconDisclosureButton from "../../../Common/Disclosure/IconDisclosureButton";
import KeyValueAttributeList from "../Attributes/KeyValueAttributeList";

interface TTokenPayoutsProps {
    payouts?: TokenPayouts
}

const TokenPayoutDetails: React.FC<TTokenPayoutsProps> = ({
    payouts,
}) => {
    let total = 0
    const formattedPayouts: TAttribute[] = Object
        .entries(payouts || {})
        .map(kv => {
            const [name, value] = kv
            total += value
            return {name, value: `${value}%`}
        })

    return (
        <IconDisclosureButton name="Royalties"
                              icon={<GrMoney/>}
                              defaultOpen={true}
        >
            <KeyValueAttributeList attributes={formattedPayouts}/>
            <div className="font-archivo mt-3 inline-flex justify-between w-full font-semibold">
                Total royalties:
                <p className="font-bold text-blue-600">{total}%</p>
            </div>
        </IconDisclosureButton>
    );
};

export default memo(TokenPayoutDetails);