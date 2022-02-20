import DropDownMjolBlueButton from "../../../Common/Buttons/DropDownMjolBlueButton";
import IconText from "../../../Icons/IconText";
import {BsList} from 'react-icons/bs';
import {MdAccountBalanceWallet as MdAcc} from 'react-icons/md'
import {GrMoney} from 'react-icons/gr'
import {GiBuyCard} from 'react-icons/gi'
import {BiDna} from 'react-icons/bi'
import PreviewAttributes from "../Attributes/PreviewAttributes";
import NftPreviewTitle from "./NftPreviewTitle";
import NftPreviewCollectionLink from "./NftPreviewCollectionLink";
import OwnerBlock from "./OwnerBlock";

const NftPreviewInfo = ({nft, payouts, contract, statusElement}) => {

    const ownerAttributes = [
        {name: "Owner ID", value: nft.ownerId || "Not found"},
        {name: "Token ID", value: nft.tokenId || "Not found"},
        {name: "Contract", value: nft.contractId || "Not found"}
    ]

    const formattedPayouts = Object.entries(payouts).map(kv => {
        const [name, value] = kv
        return {name, value: `${value}%`}
    })

    const tabs = [
        {name: "Attributes", element: <PreviewAttributes attributes={ownerAttributes}/>, icon: <MdAcc/>},
        {name: "Royalties", element: <PreviewAttributes attributes={formattedPayouts}/>, icon: <GrMoney/>},
        {name: "Traits", element: "Not found", icon: <BiDna/>}
    ]


    return (
        <div className="space-y-6 lg:max-w-[580px] w-full">
            <div className="flex flex-col gap-1 w-full">
                <NftPreviewTitle title={nft.title} verification={contract?.verification}/>
                <OwnerBlock ownerId={nft.ownerId}/>
                <div className="pt-8 text-xs-2 font-archivo text-gray-600">
                    {nft.description}
                </div>
            </div>
            {statusElement}
            <div className="space-y-3 w-full">
                {tabs.map(tab => (
                    <DropDownMjolBlueButton key={tab.name}
                                            buttonContent={
                                                <IconText icon={tab.icon}
                                                          text={tab.name}
                                                          className="group-hover:text-black text-gray-800"
                                                />
                                            }>
                        <div className="rounded-b-lg w-full bg-mjol-blue-card-property text-black font-medium text-sm px-5 py-2">
                            {tab.element}
                        </div>
                    </DropDownMjolBlueButton>
                ))}
            </div>
        </div>
    );
};

export default NftPreviewInfo;