import React, { createContext, useState, useEffect, useContext } from "react";
import { v1 as uuid } from "uuid";
import { firestore } from "../firebase/config";
import { UserContext } from "../context/UserContext";

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  const unsubscrib = async () => {
    if (user) {
      try {
        setLoading(true);
        const data = [];
        await firestore
          .collection("transactions")
          .where("user", "==", user.uid)
          .onSnapshot((snapshot) => {
            let changes = snapshot.docChanges();
            changes.forEach((change) => {
              if (change.type === "added") {
                data.push(change.doc.data());
                setAdding(false);
              } else if (change.type === "removed") {
                setTransactions(
                  data.filter((trans) => trans._id !== change.doc.data()._id)
                );
              }
            });
            setTransactions(data);
            setLoading(false);
          });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addTransaction = async (narration, amount, user) => {
    try {
      setAdding(true);
      await firestore
        .collection("transactions")
        .add({ amount, narration, _id: uuid(), user });
      setLoading(false);
    } catch (error) {
      setAdding(false);
      console.log(error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      setLoading(true);
      await firestore
        .collection("transactions")
        .where("_id", "==", `${id}`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
      setLoading(false);
      return unsubscrib();
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    unsubscrib();
  }, [user]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        deleteTransaction,
        addTransaction,
        loading,
        adding,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
