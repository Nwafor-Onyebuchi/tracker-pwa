import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Initialize history hook
  const history = useHistory();

  //Create a new user
  const register = async (email, password, userName) => {
    try {
      setLoading(true);
      const user = await auth.createUserWithEmailAndPassword(email, password);

      // update Display name
      user.user.updateProfile({ displayName: userName });
      setLoading(false);

      //direct to dashbord
      history.push("/dashboard");
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  //Login
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      history.push("/dashboard");
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ register, error, loading, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
