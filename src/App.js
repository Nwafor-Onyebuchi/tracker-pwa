import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import SignIn from "./pages/Login";
import history from "./service/history";
import SignUp from "./pages/Register";
import Dashbord from "./pages/Dashboard";

function App() {
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
