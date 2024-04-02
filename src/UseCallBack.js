import { useState } from "react"
import TinyComp from "./TinyComp"

import { useCallback } from "react"

export default function UseCallBack(){

    const [myVar,setMyVar]=useState(0)
    const [myVar1,setMyVar1]=useState(0)




    console.log("I am UseCallBack component")


    const getAge=useCallback(function(){
        return myVar1;
    },[myVar1])

     return(

        <div>
        <TinyComp name="Dhruv" getAge={getAge}  />
        <p>This is Component , current value {myVar} {myVar1}</p>
        <button onClick={()=>{setMyVar(myVar+1)}}>click me to change myVar</button>
        <button onClick={()=>{setMyVar1(myVar1+1)}}>click me to change myVar1</button>

        </div>

     )

}