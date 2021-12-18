import React, {useMemo} from 'react';
import DarkButton from "../../../components/ui/buttons/DarkButton";

const NavigationBar = () => {

    const tabBarPages = useMemo(
        () => [
            {name: 'My NFT', link: '/profile-nft/all'},
            {name: 'My Listed NFT', link: '/profile-nft/listed'},
            {name: 'My Minted NFT', link: '/profile-nft/minted'},
            {name: 'My History', link: '/profile-nft/history'},
        ], []
    )

    return (
        <div className="bg-light_white space-y-2 xs:space-y-8 xs:p-2">
            <div
                className="p-2 text-3xl text-center font-extrabold text-transparent bg-clip-text
                           md:text-6xl bg-gradient-to-br from-green-900 to-light_blue">
                My NFTs
            </div>
            <div className="text-center">
                <div className="inline-flex flex-col gap-1
                                xs:flex-row xs:gap-4 md:gap-5 md:text-lg
                                "
                >
                    {tabBarPages.map(page =>
                        <DarkButton link={page.link} title={page.name}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;