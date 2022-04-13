import React, {memo} from 'react';
import IconDisclosure from "../../../Common/Disclosure/IconDisclosureButton";
import {BiDna} from "react-icons/bi";
import {Optional} from "../../../../business-logic/types/aliases";

interface TTokenTraitsProps {
    ipfsReference?: Optional<string>
}


const TokenTraits: React.FC<TTokenTraitsProps> = ({
    ipfsReference
}) => {
    // const [traits, setTraits] = useState<{ name: string, value: string }[]>([])
    // useEffect(() => {
    //     if (ipfsReference) {
    //         fetch(ipfsReference).then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //         }).then(value => {
    //             console.log(value)
    //             if ('attributes' in value) {
    //                 const attributes = value['attributes']
    //                 setTraits(attributes.map(({trait_type, value}: any) => ({name: trait_type, value})))
    //             } else if ("traits" in value) {
    //                 const traits: Record<string, string> = value['traits']
    //                 setTraits(Object.entries(traits).map(([name, value]) => ({name, value})))
    //             } else if ('extra' in value) {
    //                 const attributes = value['extra']
    //                 setTraits(attributes.map(({trait_type, value}: any) => ({name: trait_type, value})))
    //             }
    //         })
    //     }
    //
    // }, [ipfsReference])
    return (
        <IconDisclosure icon={<BiDna/>}
                        name="Traits"
        >
            <div className="flex flex-col gap-2 font-archivo">
                Currently unsupported
            </div>

        </IconDisclosure>
    );
};

export default memo(TokenTraits);