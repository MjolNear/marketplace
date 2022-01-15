import CardLoader from "./CardLoader";
import React from "react";
import ItemsGridContainer from "../CardList/ItemsGridContainer";


interface PropTypes {
    length: number
}

const CardListLoader = React.memo<PropTypes>(({length = 12}) => {
    return (
        <ItemsGridContainer>
            {Array(length)
                .fill(0)
                .map((_, index) => (<CardLoader key={index}/>))
            }
        </ItemsGridContainer>
    )
});

export default CardListLoader