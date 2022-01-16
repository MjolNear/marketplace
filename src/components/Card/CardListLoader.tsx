import CardLoader from "./CardLoader";
import React from "react";
import ItemsGridContainer from "../CardList/ItemsGridContainer";

const CardListLoader = React.memo(() => {
    return (
        <ItemsGridContainer>
            <CardLoader/>
            <CardLoader className="hidden sm:block"/>
            <CardLoader className="hidden lg:block"/>
            <CardLoader className="hidden xl:block"/>
        </ItemsGridContainer>
    )
});

export default CardListLoader