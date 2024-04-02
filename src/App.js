import { useState, createContext,useContext } from "react";
import B from "./B";
import C from "./C";
import AppContext from "./AppContext";

function App() {


  const [user, setUser] = useState("Nisarg");

  return (

    <AppContext.Provider value={user}>

      <div style={{ "background-color": "grey", "padding": "4rem" }}>
        <h1>App {user}</h1>
        <B/>
        <C/>
      </div>

    </AppContext.Provider>



  )

}


export default App;
