import React, {useCallback, useMemo, useState} from 'react';
import exampleJSON from "../../../../../resources/traits_example.json";
import {useFormContext} from "react-hook-form";
import {CollectionTraitInput} from "../../../../../business-logic/types/form";
import UploadFileIcon from "../../../../Icons/Forms/UploadFileIcon";
import {BiErrorCircle} from "react-icons/bi";

const FileTraitsInput = () => {

    const [file, setFile] = useState<File>()

    const [error, setError] = useState('')
    const {setValue, resetField} = useFormContext<{ traits: CollectionTraitInput[] }>()

    const jsonTraits = useMemo(() => {
        return window.URL.createObjectURL(
            new Blob([
                    JSON.stringify(exampleJSON, null, '\t')
                ], {
                    type: 'text/json'
                }
            ))
    }, [])

    const clearFile = useCallback(() => {
        resetField("traits")
        setError('')
        setFile(undefined)
    }, [])

    const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) {
            return
        }
        const file = files[0]
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = event => {
            const fileText = event.target?.result
            if (typeof fileText === "string") {
                try {
                    const traits: Record<string, string[]> = JSON.parse(fileText)
                    let result: CollectionTraitInput[] = []
                    Object.entries(traits).forEach(([k, values]) => {
                        result.push({
                            attribute: k,
                            values: values.map(value => ({value}))
                        })
                    })
                    setFile(file)
                    setError('')
                    setValue("traits", result)
                } catch (e) {
                    setError("Invalid traits format")
                    setFile(undefined)
                    resetField("traits")
                }
            }
        }
    }, [])

    return (
        <div>
            <a className="hover:underline font-normal text-gray-400"
               href={jsonTraits}
               download="example.json"
            >
                Download traits_example.json
            </a>
            <div className="my-4">
                <div className="font-archivo text-gray-600 relative font-semibold bg-white w-fit
                                px-4 py-2 shadow-mjol-gray rounded-xl">
                    {!file &&
                        <label className="inline-flex items-center gap-2 cursor-pointer"
                               htmlFor="uploadTraitsFileInput"
                        >
                            Upload file
                            <UploadFileIcon/>
                        </label>
                    }
                    {file &&
                        <>
                            {file.name}
                            <button type="button"
                                    className="-top-1 -right-2 bg-gray-700 text-white absolute z-[50]
                                               rounded-full hover:bg-gray-500 cursor-pointer"
                                    onClick={clearFile}
                            >
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </>
                    }
                </div>
                {error &&
                    <div className="text-red-500 text-[13px] mt-3 ml-1 inline-flex gap-2 items-center">
                        <BiErrorCircle className="fill-red-500" size={18}/>
                        {error}
                    </div>
                }
                <input type="file"
                       className="sr-only"
                       id="uploadTraitsFileInput"
                       accept="application/JSON"
                       onChange={handleUpload}
                />
            </div>
        </div>
    );
};

export default FileTraitsInput;