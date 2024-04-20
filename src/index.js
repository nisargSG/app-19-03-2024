import React, { Suspense } from "react";

import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import ErrorBounry from "./ErrorBoundry";

//import LazyComp from './LazyComp';

const LazyComp = React.lazy(() => import("./LazyComp"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ErrorBounry>
        <Suspense fallback={<h1>Loading....</h1>}>
            <LazyComp />
        </Suspense>
    </ErrorBounry>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
