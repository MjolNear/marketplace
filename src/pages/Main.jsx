import React from 'react';
import GreetingText from "../components/main/GreetingText";
import LinkDivButton from "../components/main/Button";

const Main = () => {
    return (
        <div className="px-8 py-8">
            <GreetingText/>
            <div className="inline-flex space-x-12">
                <LinkDivButton path='/create-nft' name="create"/>
                <LinkDivButton path='/nft' name="explore"/>
            </div>
        </div>
    )
};

export default Main;