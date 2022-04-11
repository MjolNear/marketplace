import React, {useCallback, useState} from 'react';
import {BiDna} from "react-icons/bi";
import IconText from "../../../../Icons/IconText";
import InputLabel from "../../../../Common/Forms/InputLabel";
import classNames from "../../../../../utils/css-utils";
import ManualCollectionTraitsInput from "./ManualCollectionTraitsInput";
import {useFormContext} from "react-hook-form";
import {CollectionTraitInput} from "../../../../../business-logic/types/form";
import FileTraitsInput from "./FileTraitsInput";

const CollectionTraitsInput = () => {
    const label = <IconText icon={<BiDna/>} text="Traits"/>

    const {resetField} = useFormContext<{ traits: CollectionTraitInput[] }>()

    const [wantTraits, setWantTraits] = useState(false)
    const [traitsInputMode, setTraitsInputMode] = useState<"by-hand" | "from-file">("by-hand")

    const handleWantTraitsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const want = e.target.checked
        setWantTraits(want)
        if (want) {
            resetField("traits")
        }
    }, [resetField])

    const handleInputModeChange = useCallback((mode: "by-hand" | "from-file") => {
        setTraitsInputMode(mode)
        resetField("traits")
    }, [resetField])

    return (
        <div>
            <InputLabel label={label}
                        description="Provide collection traits for your NFTs.
                        Each NFT minted into this collection can have provided traits."
            />
            <div className="font-archivo inline-flex my-2 text-gray-700 text-[15px] font-semibold items-center gap-2">
                Do you want to add collection traits?
                <input className="appearance-none rounded-xl cursor-pointer
                                focus:ring-white focus:outline-0 h-5 w-5 checked:text-blue-400"
                       type="checkbox"
                       onChange={handleWantTraitsChange}
                />
            </div>
            {wantTraits &&
                <>
                    <div className="mt-3 rounded-lg overflow-hidden w-fit ring-1
                                    ring-gray-700 font-medium text-base mb-6"
                    >
                        <button onClick={() => handleInputModeChange("by-hand")}
                                type="button"
                                className={classNames(traitsInputMode === "by-hand" ? "bg-gray-700 text-white" : "text-gray-700",
                                    "px-4 py-1")}>
                            from UI
                        </button>
                        <button onClick={() => handleInputModeChange("from-file")}
                                type="button"
                                className={classNames(traitsInputMode === "from-file" ? "bg-gray-700 text-white" : "text-gray-700",
                                    "px-4 py-1")}>
                            from File
                        </button>
                    </div>
                    {traitsInputMode === "by-hand" && <ManualCollectionTraitsInput/>}
                    {traitsInputMode === "from-file" && <FileTraitsInput/>}
                </>

            }
        </div>
    );
};

export default CollectionTraitsInput;