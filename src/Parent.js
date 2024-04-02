import { useState } from "react"
import useSum from "./useSum"

export default function Parent(){

    const [a,setA]=useState(0);    //1
    const [b,setB]=useState(0);    //1
    const [c,setC]=useState(0);    //2


    const ans=useSum(a,b,c)    //0

    console.log("Rerendered Parent")

    return(

        <div>
                <p>Hello World - {a}+{b}={ans}</p>
                <p>Val of c is - {c}</p>

                <button onClick={()=>{setA(a+1)}}>add to a</button>
                <button onClick={()=>{setB(b+1)}}>add to b</button>
                <button onClick={()=>{setC(c+1)}}>add to c</button>


        </div>
        

    )


}