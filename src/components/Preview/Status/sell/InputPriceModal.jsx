import React from 'react';
import Modal from "../../../Common/modal/Modal";
import DarkBlueGradientButton from "../../../Common/buttons/DarkBlueGradientButton";
import {AiOutlineClose} from 'react-icons/ai'
import NearBlackLogo from "../../../Icons/near/NearBlackLogo";
import DarkBlueMjolText from "../../../Common/text/DarkBlueMjolText";
import {useForm} from "react-hook-form";
import {MAX_ITEM_PRICE} from "../../../../utils/string";
import PayoutsPreview from "./recieve/PayoutsPreview";

const InputPriceModal = ({close, onClick, payouts, imgSrc}) => {

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
            <Modal close={closeModal}>
                <div className="max-w-xs md:max-w-lg p-4 bg-gray-100 mx-2 xs:mx-auto rounded-md relative">
                    <div className="absolute right-0 top-0 pr-4 pt-4">
                        <AiOutlineClose onClick={closeModal} className="cursor-pointer" size={20}/>
                    </div>
                    <DarkBlueMjolText text="List NFT for sale" classes="text-2xl text-left font-black pb-4 text-center"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col justify-between h-full">
                                <div className="space-y-1">
                                    <div className="text-sm text-gray-900 font-semibold">
                                        Price
                                    </div>
                                    <div className="flex justify-between gap-3">
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
                                                required: true,
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
                                    {!isValid &&
                                        <div
                                            className="hidden md:block pt-1
                                                       text-center text-gray-700 text-xs font-semibold"
                                        >
                                            {errors?.price?.message}
                                        </div>
                                    }
                                </div>
                                <PayoutsPreview price={price} payouts={payouts}/>
                            </div>
                        </form>
                        <img src={imgSrc} alt="loading" className="hidden md:block rounded-2xl" style={{
                            width: "100%",
                            objectFit: "contain",
                            aspectRatio: "1/1"
                        }}/>
                    </div>
                    <div className="items-center flex flex-col">
                        <p className="text-black mt-4 text-sm text-center opacity-60">
                            You will be redirected to
                            NEAR Web Wallet to confirm your transaction.
                        </p>
                        <div className="mt-6">
                            <DarkBlueGradientButton
                                title="Complete listing"
                                disabled={!isValid}
                                onClick={onClick}
                                style={{
                                    width: "300px"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
;

export default InputPriceModal;