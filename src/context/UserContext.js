import React, { createContext, useState } from "react";
// import { v1 as uuid } from "uuid";
import { auth } from "../firebase/config";
import history from "../service/history";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const register = async (email, password, userName) => {
    try {
      setLoading(true);
      const user = await auth.createUserWithEmailAndPassword(email, password);
      user.user.updateProfile({ displayName: userName });
      console.log(user.user);
      setLoading(false);
      setError("");
      history.push("/dashboard");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ register, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
