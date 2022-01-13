import React, {Fragment} from 'react';
import {Transition} from "@headlessui/react";

const MjolLoader = React.memo(({width = 30, height = 30, isShowing = true, duration = 100}) => {
    return (
        <div>
            {/*<Transition*/}
            {/*    as={Fragment}*/}
            {/*    show={isShowing}*/}
            {/*    enter="transform transition"*/}
            {/*    enterFrom="opacity-0"*/}
            {/*    enterTo="opacity-100"*/}
            {/*    leave={`transform duration-${duration} transition ease-in-out`}*/}
            {/*    leaveFrom="opacity-100"*/}
            {/*    leaveTo="opacity-0"*/}
            {/*>*/}
            <div style={{
                border: "4px solid #f3f3f3", /* Light grey */
                borderTop: "4px solid #3498db", /* Blue */
                borderRadius: '50%',
                width,
                height,
                animation: "spin 1s linear infinite"
            }}/>
            {/*</Transition>*/}
        </div>
    );
});

export default MjolLoader;