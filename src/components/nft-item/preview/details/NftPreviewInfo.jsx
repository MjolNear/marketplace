import CollectionLink from "./CollectionLink";
import DropDownMjolBlueButton from "../../../ui/buttons/DropDownMjolBlueButton";
import NftPreviewTitle from "./NftPreviewTitle";
import PreviewAttributes from "../attributes/PreviewAttributes";


const NftPreviewInfo = ({nft, payouts, actionElement}) => {

    const ownerAttributes = [
        {name: "owner", value: nft.ownerId},
        {name: "token", value: nft.tokenId},
        {name: "contract", value: nft.contractId}
    ]

    const tabs = [
        {name: "Description", element: nft.description ? nft.description : "Not found"},
        {name: "Attributes", element: <PreviewAttributes attributes={ownerAttributes}/>},
        {name: "Royalties", element: <PreviewAttributes attributes={payouts}/>}
    ]

    const info = tabs.map(tab => (
        <DropDownMjolBlueButton key={tab.name} title={tab.name}>
            <div className="px-4 py-2 rounded-lg w-full text-mjol-purple-dark font-medium text-sm md:text-md
                            bg-blue-50"
            >
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
            {actionElement}
            <div className="space-y-3">
                {info}
            </div>
        </div>
    );
};

export default NftPreviewInfo;