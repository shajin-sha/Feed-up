import "./App.css";
import React, { useEffect, useState } from "react";
import Athu from "./Components/athu/athu";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserSetUp from "./Pages/userSetUp/userSetUp";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/user">
          <Athu />
        </Route>
        <Route path="/setup">
          <UserSetUp />
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
