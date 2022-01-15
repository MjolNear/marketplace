import React, {Component} from 'react';
import MjolLoader from "../components/Common/loaders/MjolLoader";

const withLazyLoading = (Component) => {
    return (props) => (
        <React.Suspense fallback={<MjolLoader width={60} height={60}/>}>
            <Component {...props}/>
        </React.Suspense>
    )
};

export default withLazyLoading;