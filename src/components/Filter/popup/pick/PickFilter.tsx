import React, {useState} from 'react';
import PopupFilter from "../PopupFilter";
import {Popover} from "@headlessui/react";
import {ActivityEventType} from "../../../../graphql/generated/graphql";
import PickOption from "./PickOption";
import {activityEvents} from '../../../../graphql/types';
import { MdOutlineEventNote } from 'react-icons/md';
import BlueButton from "../../../../@ui/Buttons/BlueButton";
import GrayButton from "../../../../@ui/Buttons/GrayButton";


interface PickFilterProps<T> {
    picked: T[]
    apply: (options: T[]) => void
}

interface InternalPickFilterProps<T> extends PickFilterProps<T> {
    name: string
    options: T[]
}

function PickFilter<T extends { toString: () => string }>({
    options,
    picked,
    apply,
    name,
}: InternalPickFilterProps<T>) {

    const [currentlyPicked, setCurrentlyPicked] = useState(picked)

    return (
        <PopupFilter name={picked.length === 0 ? name : picked.join(" , ")}
                     icon={<MdOutlineEventNote size={18}/>}
        >
            <Popover.Panel>
                {({close}) => (
                    <div className="flex flex-col items-center p-3 gap-4">
                        <div className="font-bold font-archivo text-left text-md text-gray-400 w-full">
                            {name}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {options.map(name => (
                                <PickOption text={name.toString()}
                                            isPicked={currentlyPicked.find(v => v === name) !== undefined}
                                            onClick={() => setCurrentlyPicked(
                                                currentlyPicked.find(v => v === name) === undefined
                                                    ? [...currentlyPicked, name]
                                                    : currentlyPicked.filter(v => v !== name)
                                            )}
                                />
                            ))}
                        </div>
                        <div className="inline-flex text-sm gap-2 justify-between w-full items-stretch mt-3">
                            <GrayButton title="Clear"
                                        onClick={() => {
                                            close()
                                            setTimeout(() => {
                                                setCurrentlyPicked([])
                                                apply([])
                                            }, 150)
                                        }}
                            />
                            <BlueButton title="Apply"
                                        onClick={() => {
                                            close()
                                            setTimeout(() => apply(currentlyPicked.sort()), 150)
                                        }}
                            />
                        </div>
                    </div>
                )}
            </Popover.Panel>
        </PopupFilter>
    );
}

export const ActivityEventPickFilter: React.FC<PickFilterProps<ActivityEventType>> = ({
    picked,
    apply
}) => {
    return <PickFilter
        apply={apply}
        picked={picked}
        name="Event"
        options={activityEvents}
    />
}