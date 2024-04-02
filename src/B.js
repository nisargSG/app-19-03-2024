import {  useContext } from "react";


import AppContext from "./AppContext";


export default function B(props) {
    const user = useContext(AppContext);
  
    return (<div style={{ "background-color": "yellow" }}>
      <h1>B {user}</h1>
    </div>)
  }