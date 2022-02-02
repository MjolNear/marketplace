import {ChevronUpIcon} from '@heroicons/react/solid'
import React, {useState} from "react";
import classNames from "../../../utils/css-utils";
import Hr from "../Borders/Hr";

export default function DropDownMjolBlueButton({buttonContent, children, initialVisible = false}) {

    const [visible, setVisible] = useState(initialVisible)

    return (
        <div>
            <button onClick={() => setVisible(!visible)}
                    className={
                        classNames(visible
                                ? "rounded-t-lg"
                                : "rounded-lg",
                            "group flex justify-between font-archivo p-5 w-full text-md font-semibold text-left bg-blue-100"
                        )
                    }
            >
                {buttonContent}
                <ChevronUpIcon
                    className={
                        classNames(visible
                                ? ""
                                : "rotate-180",
                            "transform duration-200 w-6 h-6 font-archivo text-gray-500 group-hover:text-black"
                        )
                    }
                />
            </button>
            {visible &&
                <>
                    <div className="px-2 bg-blue-100">
                        <Hr color="bg-gray-600"/>
                    </div>
                    {children}
                </>
            }
        </div>
    )
}