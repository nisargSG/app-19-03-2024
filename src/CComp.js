import { forwardRef } from 'react';


const CComp = forwardRef(({ value, onChange }, ref) => {


    return(

        <input type='text' placeholder='number 2' ref={ref}/>

    )


})

export default CComp