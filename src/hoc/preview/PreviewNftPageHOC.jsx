import React, {useEffect} from 'react';
import PreviewNftPage from "../../components/nft-item/preview/PreviewNftPage";
import {useParams} from "react-router";

const PreviewNftPageHOC = () => {

    const token = useParams().token
    console.log(token)

    useEffect(() => {

    }, [])

    return <PreviewNftPage nft={undefined}/>
};

export default PreviewNftPageHOC;
