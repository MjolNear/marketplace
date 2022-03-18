import React from "react";
import MjolLoader from "./MjolLoader";

const CreateLoader = () => {
    return (
        <div className="flex items-center min-h-[calc(100vh-69px)]">
            <MjolLoader size={100}/>
        </div>
    )
}

export default CreateLoader;