import React from 'react';
import {Menu} from "@headlessui/react";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "@heroicons/react/solid";
import {signOut, wallet} from "../../../business-logic/near/enviroment/near";
import ConnectWalletButton from "../../Preview/Card/Status/connect-wallet/ConnectWalletButton";
import BlueGreenGradientButton from "../Buttons/Auth/BlueGreenGradientButton";

interface TabItem {
    name: string,
    path: string
}

interface PropTypes {
    name: string
    tabs: TabItem[]
}

const MobileTabSection: React.FC<PropTypes> = ({name, tabs}) => {
    return (
        <div>
            <div className="font-semibold font-archivo text-md w-full">
                {name}
                <hr/>
            </div>
            <div className="flex flex-col">
                {tabs.map(({name, path}) =>
                    <Menu.Item key={name}>
                        {({active}) => (
                            <div className="inline-flex justify-between items-center py-[20px]">
                                {name === 'Sign out'
                                    ? <BlueGreenGradientButton title="Sign out" onClick={signOut}/>
                                    : <>
                                        <Link to={path} className="w-full text-md font-archivo">{name}</Link>
                                        <ChevronRightIcon className="w-5 h-5"/>
                                    </>
                                }
                            </div>
                        )}
                    </Menu.Item>
                )}
            </div>
        </div>
    );
};

export default MobileTabSection;