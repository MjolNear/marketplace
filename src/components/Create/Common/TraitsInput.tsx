import React, {useState} from 'react';
import InputLabel from "../../Common/Forms/InputLabel";
import {BiDna} from "react-icons/bi";
import IconText from "../../Icons/IconText";
import {TSelectedItem} from "../Token/MintTokenForm";

const TraitsInput = () => {

    const label = <IconText icon={<BiDna/>} text="Traits"/>

    const [selected, setSelected] = useState<TSelectedItem>({})

    return (
        <div>
            <InputLabel label={label}
                        description="You can additionally provide NFT traits."
            />
        </div>
    );
};

export default TraitsInput;