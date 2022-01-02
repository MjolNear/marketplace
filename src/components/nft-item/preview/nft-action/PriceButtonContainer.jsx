import React from 'react';
import PreviewNftPrice from "../../details/price/PreviewNftPrice";
import styles from "./PriceContainer.module.css"

const PriceButtonContainer = ({price, isListed, button}) => {
    return (
        <div className={styles.background}>
            <PreviewNftPrice price={price} isListed={isListed}/>
            {/*<PreviewNftPrice price={price} isListed={isListed}/>*/}
            {/*<PreviewNftPrice price={price} isListed={isListed}/>*/}
            {/*<PreviewNftPrice price={price} isListed={isListed}/>*/}
            {/*<PreviewNftPrice price={price} isListed={isListed}/>*/}
            {button}
        </div>
    );
};

export default PriceButtonContainer;