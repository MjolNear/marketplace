import React, {useCallback, useState} from 'react';
import {useForm} from "react-hook-form";
import PayoutsPreview from "./PayoutsPreview";
import {Optional} from "../../../../../@types/Aliases";
import TokenFormImagePreview from "./TokenFormImagePreview";
import TokenPriceHeader from "./TokenPriceHeader";
import TokenPriceFooter from "./TokenPriceFooter";
import TokenPriceValidationInput from "./TokenPriceValidationInput";
import {BlurModal} from "../../../../../@ui/Modal";

interface TInputTokenPriceProps {
    isOpen: boolean,
    close: () => void,
    onClick: (price: string) => Promise<any>,
    headerText?: string
    payouts: Record<string, number>
    imgSrc?: Optional<string>
}

const InputPriceModal: React.FC<TInputTokenPriceProps> = ({
        isOpen,
        close,
        onClick,
        payouts,
        imgSrc,
        headerText = "List NFT for sale"
    }) => {
        const [isSigningTx, setIsSigningTx] = useState(false)

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
            setIsSigningTx(true)
            onClick(price.toString())
                .finally(() => {
                    setIsSigningTx(false)
                    closeModal()
                })
        }, [onClick, closeModal])

        const price = watch("price")

        return (
            <BlurModal close={closeModal} isOpen={isOpen}>
                <div className="mx-auto w-full max-w-[450px] md:max-w-lg px-5 bg-white rounded-2xl relative">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TokenPriceHeader headerText={headerText}/>
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-6">
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
                        <TokenPriceFooter isPriceValid={formState.isValid} isLoading={isSigningTx}/>
                    </form>
                </div>
            </BlurModal>
        );
    }
;

export default InputPriceModal;