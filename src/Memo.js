import { useState,useMemo } from "react";

export default function Memo(){

    const [count,setCount]=useState(0)

    const [quantity,setQuantity]=useState(1)

    //const [finalAmount,setFinalamount]=useState()

    const finalAmount  =useMemo(()=>{
        console.log("Recalculating final amount");
        return quantity*1000
    },[quantity]) 



    return(

        <div>
            <p>Page Refreshed : {count}</p>
            <button onClick={()=>{setCount(count+1)}}>rerender</button>

            <p>Quntity : {quantity}</p>
            <button onClick={()=>{setQuantity(quantity+1)}}>Add Quntity</button>

            <p>Final Amount = {finalAmount} </p>

        </div>

    )



}