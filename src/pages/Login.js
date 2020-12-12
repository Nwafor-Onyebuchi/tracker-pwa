import React from "react";
import Login from "../components/LoginForm";
import UserContextProvider from "../context/UserContext";

const SignIn = () => {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
};

export default SignIn;
