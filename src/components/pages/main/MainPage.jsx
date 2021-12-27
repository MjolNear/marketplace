import React from 'react';
import GreetingText from "./GreetingText";
import LinkDivButton from "./Button";

const MainPage = () => {
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

export default MainPage;