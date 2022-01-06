import React, {useState} from 'react';
import MjolGreenBlueButton from "../buttons/MjolGreenBlueButton";

const InputPriceModal = ({hidden, setVisible, onClick}) => {

    const [price, setPrice] = useState('')

    return (
        <div>
            {hidden
                ? <></>
                : <div className="fixed inset-0 bg-gray-600 bg-opacity-90 overflow-y-auto
                                   h-full w-full grid place-items-center"
                >
                    <div className="w-1/2 grid grid-rows-2 gap-4 px-2 py-4 rounded-lg bg-mjol-white">
                        <input className="rounded-lg p-2"
                               type="number"
                               placeholder="Price you want your NFT to be sold"
                               value={price}
                               onChange={e => setPrice(e.target.value)}
                        />
                        <MjolGreenBlueButton onClick={() => onClick(price)}>
                            Sell
                        </MjolGreenBlueButton>
                        <MjolGreenBlueButton onClick={() => setVisible(false)}>
                            Close popup
                        </MjolGreenBlueButton>
                    </div>
                </div>
            }
        </div>
    );
};

export default InputPriceModal;