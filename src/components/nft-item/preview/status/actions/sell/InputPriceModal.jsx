import React, {useState} from 'react';
import MyModal from "../../../../../ui/modal/Modal";
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
                isValid
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
            <MyModal visible={visible} setVisible={setVisible}>
                <div className="max-w-sm w-full p-4 bg-gray-100 mx-2 rounded-md relative">
                    <div className="absolute right-0 top-0 pr-4 pt-4">
                        <AiOutlineClose onClick={closeModal} className="cursor-pointer" size={20}/>
                    </div>
                    <div>
                        <DarkBlueMjolText text="NFT Listing" classes="text-2xl text-left font-black"/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <div className="block text-sm text-gray-900 mb-2">
                                    Price
                                </div>
                                <div className="flex justify-between gap-1 pb-2">
                                    <input
                                        className="w-full px-3 py-2 rounded-lg border-transparent text-black text-base
                                               bg-black bg-opacity-5
                                               focus:bg-opacity-10
                                               focus:border-transparent
                                               "
                                        type="number"
                                        step="any"
                                        placeholder="NFT price"
                                        {...register("price", {
                                            required: true,
                                            max: MAX_ITEM_PRICE,
                                            min: 0,
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
                                <DarkBlueGradientButton title="List" disabled={!isValid}/>
                            </div>
                        </form>
                    </div>
                </div>
            </MyModal>
        );
    }
;

export default InputPriceModal;