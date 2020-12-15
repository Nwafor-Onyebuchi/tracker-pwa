import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "../firebase/config";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  //Initialize history hook
  const history = useHistory();

  //Create a new user
  const register = async (email, password, userName) => {
    try {
      setLoading(true);
      const user = await auth.createUserWithEmailAndPassword(email, password);

      // update Display name
      user.user.updateProfile({ displayName: userName });
      await firestore
        .collection("users")
        .doc(user.user.uid)
        .set({ displayName: userName, _id: user.user.uid });
      setLoading(false);
      setUser(user.user);

      //direct to dashbord
      history.push("/dashboard");
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  //Login
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const user = await auth.signInWithEmailAndPassword(email, password);
      setUser(user.user);

      setLoading(false);
      history.push("/dashboard");
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  //Logout
  const signout = async () => {
    await auth.signOut();
    history.push("/");
  };

  useEffect(() => {
    // Listen for auth changes
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/dashboard");
        setUser(user);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ register, error, loading, signIn, user, signout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
