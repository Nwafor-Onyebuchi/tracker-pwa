import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import SignIn from "./pages/Login";
import history from "./service/history";
import SignUp from "./pages/Register";
import Dashbord from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashbord} />
        <Route path="/" exact component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
