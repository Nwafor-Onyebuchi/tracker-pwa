import React, { useState, useContext } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Squares } from "react-activity";

const SignUpForm = () => {
  const { register, error, loading } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setpassword(e.target.value);
  };

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, userName);
    setpassword("");
    setEmail("");
    setUserName("");
  };

  return (
    <div>
      <Header name="Sign Up" />
      {error && <h5 style={{ color: "red" }}>{error}</h5>}
      <div className="inc-exp-container">
        <form id="signup">
          <div className="inc-container">
            <label htmlFor="email">
              Email <br />
              <small></small>
            </label>
            <input
              onChange={handleEmailInput}
              type="text"
              value={email}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="exp-container">
            <label htmlFor="email">
              Password <br />
              <small></small>
            </label>
            <input
              onChange={handlePasswordInput}
              type="text"
              value={password}
              placeholder="Enter password"
            />
          </div>
          <div className="exp-container">
            <label htmlFor="email">
              Username <br />
              <small></small>
            </label>
            <input
              onChange={handleUserNameInput}
              type="text"
              value={userName}
              placeholder="Eg. Buchi"
            />
          </div>
        </form>
      </div>
      <button
        className="btn"
        onClick={handleSubmit}
        disabled={loading ? true : false}
      >
        {loading ? (
          <div id="activity">
            <Squares color="#fff" size={24} />
          </div>
        ) : (
          "Sign up"
        )}
      </button>
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
