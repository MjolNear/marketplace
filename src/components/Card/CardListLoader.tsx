import CardLoader from "./CardLoader";
import React from "react";


interface PropTypes {
    length: number
}

const CardListLoader = React.memo<PropTypes>(({length = 12}) => (
    <>
        <div className="hidden md:flex md:flex-wrap">
            {Array(length).map((_, index) => {
                return (
                    <CardLoader key={index}/>
                )
            })}
        </div>
        <div className="md:hidden">
            <div className="w-full">
                <CardLoader/>
            </div>
        </div>
    </>
));

export default CardListLoader