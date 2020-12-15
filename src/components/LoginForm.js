import React, { useContext, useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Squares } from "react-activity";
import { Form, Button, Jumbotron } from "react-bootstrap";

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
      <Jumbotron>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailInput}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordInput}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-block">
            {loading ? (
              <div id="activity">
                <Squares color="#fff" size={24} />
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </Form>
      </Jumbotron>
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
