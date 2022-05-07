import React from 'react';
import ActivityEventIcon from "../../../Activity/Common/ActivityEventIcon";
import {ActivityEventType} from "../../../../graphql/generated/graphql";
import {ButtonProps} from "../../../../@ui/Buttons/ButtonProps";
import classNames from "../../../../utils/css-utils";

interface PickOptionProps {
    text: string
    isPicked: boolean
    icon?: React.ReactNode
}

const PickOption: React.FC<PickOptionProps & ButtonProps> = ({
    text,
    isPicked,
    icon,
    ...props
}) => {

    const activity = text as ActivityEventType

    return (
        <button className={classNames(
            "font-semibold font-archivo text-[13px] text-left w-full transition-all rounded-lg",
            isPicked
                ? "bg-gray-900 text-white hover:opacity-70"
                : "hover:bg-gray-100 text-black hover:text-gray-900 ring-1 ring-gray-300 text-gray-600"
        )}
                {...props}
        >
            <div className="px-5 py-3 gap-3 grid grid-cols-[16px_1fr] items-center">
                <ActivityEventIcon event={activity}
                                   size={16}
                                   fill={isPicked ? "fill-white" : "fill-black"}
                />
                {activity === ActivityEventType.UpdatePrice
                    ? "Update price"
                    : text
                }
            </div>
        </button>
    )
};

export default PickOption;