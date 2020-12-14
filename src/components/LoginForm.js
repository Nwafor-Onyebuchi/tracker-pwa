import React, { useContext, useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Squares } from "react-activity";

const Login = () => {
  const { signIn, error, loading } = useContext(UserContext);
  // console.log(loading);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    setpassword("");
    setEmail("");
  };
  return (
    <div>
      <Header name="Login" />
      {error && <h5 style={{ color: "red" }}>{error}</h5>}
      <div className="inc-exp-container">
        <form id="signup">
          <div className="inc-container">
            <label htmlFor="amount">
              Email <br />
              <small></small>
            </label>
            <input
              type="text"
              value={email}
              placeholder="example@gmail.com"
              onChange={handleEmailInput}
            />
          </div>
          <div className="exp-container">
            <label htmlFor="amount">
              Password <br />
              <small></small>
            </label>
            <input
              type="text"
              value={password}
              placeholder="Enter password"
              onChange={handlePasswordInput}
            />
          </div>
        </form>
      </div>

      <button className="btn" onClick={handleSubmit}>
        {loading ? (
          <div id="activity">
            <Squares color="#fff" size={24} />
          </div>
        ) : (
          "Login"
        )}
      </button>

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
