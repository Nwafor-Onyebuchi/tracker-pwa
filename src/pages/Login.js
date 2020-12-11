import React from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header name="Login" />
      <div className="inc-exp-container">
        <form id="signup">
          <div className="inc-container">
            <label htmlFor="amount">
              Email <br />
              <small></small>
            </label>
            <input
              type="text"
              // value={state.amount}
              placeholder="example@gmail.com"
              // onChange={handleAmountInput}
            />
          </div>
          <div className="exp-container">
            <label htmlFor="amount">
              Password <br />
              <small></small>
            </label>
            <input
              type="text"
              // value={state.amount}
              placeholder="Enter password"
              // onChange={handleAmountInput}
            />
          </div>
        </form>
      </div>
      <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
        <button className="btn" onClick={() => console.log("clicked")}>
          Login
        </button>
      </Link>
      <h5>
        {"Don't have an account? "}
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          Sign up
        </Link>
      </h5>
    </div>
  );
};

export default Login;
