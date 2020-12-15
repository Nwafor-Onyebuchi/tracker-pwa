import React, { useState, useContext } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Squares } from "react-activity";
import { Jumbotron, Button, Form } from "react-bootstrap";

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

      <Jumbotron>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailInput}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordInput}
              value={password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg. Buchi"
              onChange={handleUserNameInput}
              value={userName}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-block">
            {loading ? (
              <div id="activity">
                <Squares color="#fff" size={24} />
              </div>
            ) : (
              "Sign up"
            )}
          </Button>
        </Form>
      </Jumbotron>

      <h5>
        {"Already have an account? "}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Login
        </Link>
      </h5>
    </div>
  );
};

export default SignUpForm;
