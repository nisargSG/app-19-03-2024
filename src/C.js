import {  useContext } from "react";


import AppContext from "./AppContext";


export default function C(props) {
    const user = useContext(AppContext);
  
    return (<div style={{ "background-color": "green" }}>
      <h1>C {user}</h1>
    </div>)
  }