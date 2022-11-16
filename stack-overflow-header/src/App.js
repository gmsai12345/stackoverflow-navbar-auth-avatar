import React from "react";
import ReactDOM from "react-dom";
import Header1 from "./header";
//import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
//import Route1 from "../../Route1";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Header1/>
    </div>
  );
}
ReactDOM.render(<div>{App()}</div>, document.getElementById("root"));

export default App;
