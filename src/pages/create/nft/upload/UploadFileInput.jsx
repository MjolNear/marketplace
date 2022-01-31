import React from "react";
import docFileImg from "../../../../resources/doc-img.png";
import exampleJSON from "../../../../resources/traits_example";

const UploadFileInput = (props) => {
    let jsonText;
    if (props.type === "file"){
        jsonText = window.URL.createObjectURL(
            new Blob([JSON.stringify(exampleJSON, null, '\t')],
                {type: 'text/json'})
        );
    }
    return (
        <div>
            <label className="block text-sm font-bold text-gray-700">
                {props.text}{props.required ? <b className="text-sm font-large text-red-500">*</b> : <></>}
                {props.extra_text ? <span className={"font-normal text-gray-400"}>{props.extra_text}</span> : <></>}
                {props.type === "file" ?  <a className={"hover:underline font-normal text-gray-400"} href={jsonText} download={"example.json"}>Download traits_example.json</a>: <></>}
            </label>

            {props.state === null ? (
                <div
                    className="flex justify-center mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        {props.type === "file" ? (
                            <svg
                                className="mx-auto h-12 w-12 text-red-500"
                                height="32px" viewBox="0 0 32 32" width="32px"
                                aria-hidden="true"
                            >
                                <g fill="none" id="Page-1" stroke="none"><g fill="#929292" id="icon-93-inbox-upload"><path d="M16,6 L12.75,9.25 L12,8.5 L16.5,4 L21,8.5 L20.25,9.25 L17,6 L17,17 L16,17 L16,6 L16,6 Z M21,19 L27.7750244,19 L23.4000244,12 L18,12 L18,11 L24,11 L29,19 L29,20 L29,28 L4,28 L4,19 L9,11 L15,11 L15,11 L15,12 L9.59997559,12 L5.22497559,19 L12,19 L12,21 C12,22.1045695 12.8958578,23 13.9973917,23 L19.0026083,23 C20.1057373,23 21,22.1122704 21,21 L21,19 L21,19 L21,19 Z" id="inbox-upload"/></g></g></svg>
                                ) : (
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor={props.id}
                                className="mx-auto cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload {props.type}</span>
                                <input id={props.id} name={props.id} type="file" accept={props.accept}
                                       className="sr-only" onChange={(e) => props.setState(e.target.files[0])}/>
                            </label>
                        </div>
                        <p className="text-xs text-gray-500">{props.file_text}</p>
                    </div>
                </div>
            ) : (
                <div
                    className="flex justify-start mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="relative">
                        { props.type === "file" ? (
                            <img width="100px" src={docFileImg} alt="file"/>
                        ):(
                            <img width="100px" src={URL.createObjectURL(props.state)} alt="nft image"/>
                        )
                        }
                        <button
                            className="absolute top-0 right-0 -mx-2 -my-2 bg-gray-900 text-white rounded-full hover:bg-gray-500 cursor-pointer"
                            onClick={() => props.setState(null)}>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>

            )}
        </div>
    )
};

export default UploadFileInput;