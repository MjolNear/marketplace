import React, {useContext, useState} from "react";
import {BsFillGrid3X3GapFill, BsFillGridFill} from "react-icons/bs";
import Tooltip from "../components/Layout/Tooltip";
import classNames from "../utils/css-utils";

export enum CardSize {
    Small,
    Big
}


const CardSizeContext = React.createContext({
    size: CardSize.Big,
    setSize: (_: CardSize) => {
    }
})


export const CardSizeProvider: React.FC = ({
    children
}) => {
    const [size, setSize] = useState(CardSize.Big)
    return (
        <CardSizeContext.Provider value={{size, setSize}}>
            {children}
        </CardSizeContext.Provider>
    )
}

export const useCardSizeContext = () => useContext(CardSizeContext)

export const useCardSize = () => {
    return useCardSizeContext().size
}


export const CardSizeSwitcher: React.FC = () => {
    const {setSize, size} = useCardSizeContext()
    return (
        <div className="inline-flex items-center rounded-xl ring-[1.5px] ring-blue-200 min-h-[37px]">
            <button onClick={() => setSize(CardSize.Big)}
                    className={classNames(
                        "h-full px-4 rounded-l-xl",
                        size === CardSize.Big ? "bg-blue-200" : "hover:shadow-mjol-gray"
                    )}
                    data-for="bigCardSizeTooltipId"
                    data-tip="Large display"
            >
                <BsFillGridFill size={20} className={size === CardSize.Big ? "fill-white" : ""}/>
                {size === CardSize.Small && <Tooltip id="bigCardSizeTooltipId" place="top" delayShow={500}/>}
            </button>
            <div className="h-full w-[1.5px] bg-blue-200"/>
            <button onClick={() => setSize(CardSize.Small)}
                    className={classNames(
                        "h-full px-4 rounded-r-xl",
                        size === CardSize.Small ? "bg-blue-200" : "hover:shadow-mjol-gray"
                        )}
                    data-for="smallCardSizeTooltipId"
                    data-tip="Small display"
            >
                <BsFillGrid3X3GapFill size={20} className={size === CardSize.Small ? "fill-white" : ""}/>
                {size === CardSize.Big && <Tooltip id="smallCardSizeTooltipId" place="top" delayShow={500}/>}
            </button>
        </div>
    )
}