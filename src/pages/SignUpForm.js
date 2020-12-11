import React from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div>
      <Header name="Sign Up" />
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
          <div className="exp-container">
            <label htmlFor="amount">
              Username
              <br />
              <small></small>
            </label>
            <input
              type="text"
              // value={state.amount}
              placeholder="Eg. Buchi"
              // onChange={handleAmountInput}
            />
          </div>
        </form>
      </div>
      <button className="btn">Sign Up</button>
      <h5>
        {"Already have an account? "}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Log into your account
        </Link>
      </h5>
    </div>
  );
};

export default SignUpForm;
