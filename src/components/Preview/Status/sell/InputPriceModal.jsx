import React from 'react';
import Modal from "../../../Common/modal/Modal";
import DarkBlueGradientButton from "../../../Common/buttons/DarkBlueGradientButton";
import {AiOutlineClose} from 'react-icons/ai'
import NearBlackLogo from "../../../Icons/near/NearBlackLogo";
import DarkBlueMjolText from "../../../Common/text/DarkBlueMjolText";
import {useForm} from "react-hook-form";
import {MAX_ITEM_PRICE} from "../../../../utils/string";
import PayoutsPreview from "./recieve/PayoutsPreview";

const InputPriceModal = ({close, onClick, payouts}) => {

        const closeModal = () => {
            close()
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
            <Modal close={closeModal}>
                <div className="max-w-sm p-4 bg-gray-100 mx-2 xs:mx-auto rounded-md relative">
                    <div className="absolute right-0 top-0 pr-4 pt-4">
                        <AiOutlineClose onClick={closeModal} className="cursor-pointer" size={20}/>
                    </div>
                    <div className="space-y-5">
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
            </Modal>
        );
    }
;

export default InputPriceModal;