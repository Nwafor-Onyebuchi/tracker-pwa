import React from "react";
import SignUpForm from "../components/SignUpForm";
import UserContextProvider from "../context/UserContext";

const Register = () => {
  return (
    <UserContextProvider>
      <SignUpForm />
    </UserContextProvider>
  );
};

export default Register;
