import './App.css';
import React from "react"
import Athu from "./Components/athu/athu"
import Home from "../src/Pages/Home/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">



      <Router>


        <Route exact path="/Home" >

          <Home />

        </Route>




        <Route path="/user" >

          <Athu />

        </Route>





      </Router>





    </div>
  );
}

export default App;
