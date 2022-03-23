import React, {useCallback, useState} from 'react';
import Modal from "../../../../Common/Modal/Modal";
import {useForm} from "react-hook-form";
import PayoutsPreview from "./PayoutsPreview";
import {Optional} from "../../../../../business-logic/models/types";
import TokenFormImagePreview from "./TokenFormImagePreview";
import TokenPriceHeader from "./TokenPriceHeader";
import TokenPriceFooter from "./TokenPriceFooter";
import TokenPriceValidationInput from "./TokenPriceValidationInput";

interface TInputTokenPriceProps {
    close: any,
    onClick: (price: string) => Promise<any>,
    payouts: Record<string, number>
    imgSrc?: Optional<string>
}

const InputPriceModal: React.FC<TInputTokenPriceProps> = ({
        close,
        onClick,
        payouts,
        imgSrc
    }) => {
        const [isSellingProcess, setIsSellingProcess] = useState(false)

        const {register, watch, handleSubmit, reset, formState} = useForm({
            mode: "onChange",
            defaultValues: {
                price: 0
            }
        })

        const closeModal = useCallback(() => {
            close()
            reset()
        }, [close, reset])

        const onSubmit = useCallback(({price}: { price: number }) => {
            setIsSellingProcess(true)
            onClick(price.toString())
                .finally(() => {
                    setIsSellingProcess(false)
                    closeModal()
                })
        }, [onClick, closeModal])

        const price = watch("price")

        return (
            <Modal close={closeModal}>
                <div className="mx-auto w-full max-w-[400px] md:max-w-lg py-4 px-5 bg-white rounded-2xl relative">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TokenPriceHeader closeModal={closeModal}/>
                        <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-6">
                            <div className="flex flex-col justify-between">
                                <TokenPriceValidationInput register={register}
                                                           isPriceValid={formState.isValid}
                                                           errorMessage={formState.errors?.price?.message}
                                />
                                <PayoutsPreview price={price}
                                                payouts={payouts}
                                />
                            </div>
                            <TokenFormImagePreview link={imgSrc}/>
                        </div>
                        <TokenPriceFooter isPriceValid={formState.isValid} isLoading={isSellingProcess}/>
                    </form>
                </div>
            </Modal>
        );
    }
;

export default InputPriceModal;