import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import SignIn from "./pages/Login";
import history from "./service/history";
import SignUp from "./pages/Register";
import Dashbord from "./pages/Dashboard";
import { UserContext } from "./context/UserContext";

function App() {
  // const { user } = useContext(UserContext);
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashbord} />
      </BrowserRouter>
    </div>
  );
}

export default App;
