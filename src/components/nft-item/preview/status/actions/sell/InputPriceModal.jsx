import React, {useState} from 'react';
import GrayModal from "../../../../../ui/modal/Modal";
import DarkBlueGradientButton from "../../../../../ui/buttons/DarkBlueGradientButton";
import {AiOutlineClose} from 'react-icons/ai'
import PayoutsPreview from "./recieve/PayoutsPreview";
import NearBlackLogo from "../../../../../ui/icons/near/NearBlackLogo";
import DarkBlueMjolText from "../../../../../ui/text/DarkBlueMjolText";
import {useForm} from "react-hook-form";
import {MAX_ITEM_PRICE} from "../../../../../../utils/string";

const InputPriceModal = ({visible, setVisible, onClick, payouts}) => {

        const closeModal = () => {
            setVisible(false)
            reset()
        }

        const {
            register,
            watch,
            handleSubmit,
            reset,
            formState: {
                isValid, errors
            }
        } = useForm({
            mode: "onChange",
            defaultValues: {
                price: ""
            }
        })

        const onSubmit = ({price}) => {
            onClick(price)
            closeModal()
        }

        const price = watch("price")

        return (
            <GrayModal visible={visible} setVisible={setVisible}>
                <div className="max-w-sm p-4 bg-gray-100 mx-2 xs:mx-auto rounded-md relative">
                    <div className="absolute right-0 top-0 pr-4 pt-4">
                        <AiOutlineClose onClick={closeModal} className="cursor-pointer" size={20}/>
                    </div>
                    <div>
                        <DarkBlueMjolText text="List NFT for sale" classes="text-2xl text-left font-black"/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <div className="text-sm text-gray-900 font-bold mb-2">
                                    Price
                                </div>
                                <div className="flex justify-between gap-3 pb-2">
                                    <input
                                        min="0"
                                        className="
                                               w-full
                                               px-3 py-2 rounded-lg border-transparent text-gray-800 text-base
                                               bg-black bg-opacity-5
                                               focus:bg-opacity-10
                                               focus:text-black
                                               focus:border-transparent
                                               focus:ring-0
                                               "
                                        type="number"
                                        step="any"
                                        placeholder="NFT price"
                                        {...register("price", {
                                            required: "Please enter price",
                                            max: {
                                                value: MAX_ITEM_PRICE,
                                                message: `Maximum price is ${MAX_ITEM_PRICE} Ⓝ`
                                            },
                                            min: {
                                                value: 0,
                                                message: "Minimum price is 0 Ⓝ"
                                            },
                                        })}
                                    />
                                    <NearBlackLogo/>
                                </div>
                                <PayoutsPreview price={price} payouts={payouts}/>
                                <p className="text-black mt-4 text-sm text-center opacity-60">
                                    You will be redirected to
                                    NEAR Web Wallet to confirm your transaction.
                                </p>
                            </div>
                            <div className="mt-6">
                                <DarkBlueGradientButton title="Complete listing" disabled={!isValid}/>
                            </div>
                        </form>
                    </div>
                </div>
            </GrayModal>
        );
    }
;

export default InputPriceModal;