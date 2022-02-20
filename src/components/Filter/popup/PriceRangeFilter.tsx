import React, {useState} from 'react';
import PopoverFilter from "./PopupFilter";
import NearBlackLogo from "../../Icons/near/NearBlackLogo";
import GrayInput from "../../Input/GrayInput";
import GrayButton from "../../Common/Buttons/GrayButton";
import BlueButton from "../../Common/Buttons/BlueButton";
import {Popover} from '@headlessui/react';
import {TokenPriceRange} from "../../../pages/explore/nft/ExploreNftsPage";
import {utils} from "near-api-js";

interface RangeFilterProps {
    onApply: (range: TokenPriceRange) => any,
    onClear: () => any
}

const PriceRangeFilter: React.FC<RangeFilterProps> = ({
    onApply,
    onClear
}) => {

    const formatRangeBorder = (nearAmount?: string): string | undefined => {
        const amount = utils.format.parseNearAmount(nearAmount)
        if (amount === null) {
            return undefined
        }
        return amount
    }

    const initialPriceRange: TokenPriceRange = {}
    const [priceRange, setPriceRange] = useState(initialPriceRange)

    return (
        <PopoverFilter name="Price range"
                       icon={
                           <NearBlackLogo size={11}/>
                       }
        >
            <Popover.Panel className="flex flex-col items-center p-3 gap-2 w-[280px]">
                {({close}) => (
                    <>
                        <div className="font-bold font-archivo text-left text-md text-gray-400 w-full">
                            Price
                        </div>
                        <div className="inline-flex max-w-[280px] justify-between gap-2">
                            <GrayInput placeholder="From"
                                       type="number"
                                       value={priceRange.from}
                                       onChange={e => setPriceRange({
                                               ...priceRange,
                                               from: e.target.value
                                           }
                                       )}
                            />
                            <GrayInput placeholder="To"
                                       type="number"
                                       value={priceRange.to}
                                       onChange={e => setPriceRange({
                                               ...priceRange,
                                               to: e.target.value
                                           }
                                       )}
                            />
                        </div>
                        <div className="inline-flex text-sm gap-2 justify-between w-full items-stretch">
                            <GrayButton title="Clear" onClick={() => {
                                close()
                                setPriceRange(initialPriceRange)
                                onClear()
                            }}/>
                            <BlueButton title="Apply"
                                        disabled={!priceRange.from && !priceRange.to}
                                        onClick={() => {
                                close()
                                onApply({
                                    from: formatRangeBorder(priceRange.from),
                                    to: formatRangeBorder(priceRange.to)
                                })
                            }}/>
                        </div>
                    </>
                )}
            </Popover.Panel>
        </PopoverFilter>
    );
};

export default PriceRangeFilter;