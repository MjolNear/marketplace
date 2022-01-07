import CollectionLink from "./CollectionLink";
import DropDownMjolBlueButton from "../../../ui/buttons/DropDownMjolBlueButton";
import NftPreviewTitle from "./NftPreviewTitle";
import PreviewAttributes from "../attributes/PreviewAttributes";
import IconText from "../../../ui/icons/IconText";
import {BsList} from 'react-icons/bs';
import {MdAccountBalanceWallet as MdAcc} from 'react-icons/md'
import {GrMoney} from 'react-icons/gr'
import {GiBuyCard} from 'react-icons/gi'
import {BiDna} from 'react-icons/bi'


const NftPreviewInfo = ({nft, payouts, statusElement}) => {

    const ownerAttributes = [
        {name: "Owner ID", value: nft.ownerId},
        {name: "Token ID", value: nft.tokenId},
        {name: "Contract", value: nft.contractId}
    ]

    const tabs = [
        {name: "Description", element: nft.description ? nft.description : "Not found", icon: <BsList/>},
        {name: "Attributes", element: <PreviewAttributes attributes={ownerAttributes}/>, icon: <MdAcc/>},
        {name: "Royalties", element: <PreviewAttributes attributes={payouts}/>, icon: <GrMoney/>},
        {name: "History", element: "Not found", icon: <GiBuyCard/>},
        {name: "Traits", element: "Not found", icon: <BiDna/>}
    ]

    const info = tabs.map(tab => (
        <DropDownMjolBlueButton key={tab.name}
                                buttonContent={
                                    <IconText icon={tab.icon}
                                              text={tab.name}
                                    />
                                }>
            <div className="rounded-b-lg w-full bg-blue-100 text-black font-medium text-sm px-5 py-2">
                {tab.element}
            </div>
        </DropDownMjolBlueButton>
    ))

    return (
        <div className="space-y-5 md:max-w-xl">
            <div>
                <NftPreviewTitle title={nft.title}/>
                <CollectionLink name={"MOCK"} link=""/>
            </div>
            {statusElement}
            <div className="space-y-3">
                {info}
            </div>
        </div>
    );
};

export default NftPreviewInfo;