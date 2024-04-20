import React, { Suspense } from 'react';
import Comp1 from './Comp1';


export default function SParent() {

    return (

        <Suspense fallback={<div class="spinner-grow text-primary" role="status">
            <span class="sr-only"></span>
        </div>}>

            <Comp1/>

        </Suspense>

    )



}