import React, {useEffect, useState} from 'react';
import {useFormContext} from "react-hook-form";
import InputLabel from "../../../Common/Forms/InputLabel";
import BaseInput from "../../../Common/Forms/BaseInput";
import QuestionIcon from "../../../Icons/QuestionIcon";
import {COLLECTION_ID_REGEX} from "../../../../business-logic/types/form";
import useDebounce from "../../../../hooks/useDebounce";
import {useCheckCollectionIdIsEmpty} from "../../../../hooks/collection/useCheckCollectionIdIsEmpty";

const CollectionUrlInput = () => {
    const {
        register,
        formState,
        watch,
        setError,
        clearErrors
    } = useFormContext<{ collectionId?: string }>()

    const error = formState.errors?.collectionId?.message
    const collectionId = watch("collectionId")

    const debounced = useDebounce(collectionId, 2000) || ""
    const {isEmpty, loading, error: apiError} = useCheckCollectionIdIsEmpty(debounced)

    const [typing, setTyping] = useState(false)

    useEffect(() => {
        setTyping(!!collectionId && !error && (loading || debounced !== collectionId))
    }, [collectionId, error, loading, debounced])

    useEffect(() => {
        if (!typing && !isEmpty && !apiError && collectionId) {
            setError("collectionId", {message: "Collection URL is already taken"})
        } else if (!typing && apiError && collectionId) {
            setError("collectionId", {message: "Unable to check URL"})
        }
    }, [isEmpty, collectionId, typing, setError, clearErrors])

    return (
        <div>
            <InputLabel label="Collection URL"
                        labelTooltip={<QuestionIcon
                            dataTip="You can customize collection URL as you want. Otherwise we'll generate it for you."
                            dataFor="customizeCollectionURLTooltip"
                            place="bottom"
                        />}
                        description="Must only contain lowercase letters, numbers, and hyphens."
            />
            <BaseInput placeholder="flowers-by-satoshi"
                       inputPrefix="https://mjolnear.com/collections/"
                       typing={typing}
                       okMessage={typing || error || !collectionId ? "" : "Collection URL is free"}
                       error={error}
                       {...register("collectionId", {
                           maxLength: {
                               value: 50,
                               message: "Maximum URL length is 50 symbols"
                           },
                           pattern: {
                               value: COLLECTION_ID_REGEX,
                               message: "Used forbidden symbols"
                           }
                       })}
            />
        </div>
    );
};

export default CollectionUrlInput;