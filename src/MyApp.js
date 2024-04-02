import { useState } from "react"
import { useReducer } from "react";

export default function MyApp() {

    //const [count, setCount] = useState(10)
    const initialState = {
        icecream:10,
        cakes:0,
        coffeee:20,
    };

    const divStyle ={
        "background-color":"red",
        "padding":"2rem",
        "border":"solid 1px #CCC"
    }

    const reducer =(state,action)=>{

        switch (action) {
            case "ADD":
                return {
                    ...state,
                    icecream:state.icecream+=1
                }
            break;

            case "DEDUCT":
                return {
                    ...state,
                    icecream:state.icecream-=1
                }

            break;

            case "RESET":
                return {
                    ...state,
                    icecream:0
                }

            break;

            default:
                return state
            break

            
        }

    } 
    
    const [currentState, dispatch] = useReducer(reducer, initialState);

    return (

        <div style={divStyle}>

            <p>icecream : {currentState.icecream}</p>
            <br></br>
            <p>cake : {currentState.cakes}</p>
            <br></br>
            <p>coffeee : {currentState.coffeee}</p>

            <button onClick={()=>{dispatch("ADD")}}>click me to add</button>
            <button onClick={()=>{dispatch("DEDUCT")}}>click me to deduct</button>
            <button onClick={()=>{dispatch("RESET")}}>click me to reset</button>


        </div>

    )

}