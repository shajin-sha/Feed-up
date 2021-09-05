import "./App.css";
import Athu from "./Components/athu/athu";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserSetUp from "./Pages/userSetUp/userSetUp";
import Welcome from "./Pages/Welcome/Welcome";
import Edit from "./Pages/Edit/Edit"
import EditProfile from "./Pages/Edit/EditProfile"
import InstallApp from "./Pages/InstallApp/InstallApp";

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
        <Route path="/edit">
          <Edit/>
        </Route>
        <Route path="/editprofile">
          <EditProfile/>
        </Route>
        <Route path="/install">
          <InstallApp/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
