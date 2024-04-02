import { useState, useEffect } from "react";


export default function useSum(a,b,c){

    const [answer, setAnswer] = useState(0);


    useEffect(() => {
        console.log("Recalculate")
        setAnswer(a+b*a+b*a+b) // 1sec time 0 // 8
      }, [a,b]);

    return answer;
}