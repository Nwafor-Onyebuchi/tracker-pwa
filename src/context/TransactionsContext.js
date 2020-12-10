import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import { firestore } from "../firebase/config";

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const unsubscrib = async () => {
    try {
      setLoading(true);
      const data = [];
      await firestore.collection("transactions").onSnapshot((snapshot) => {
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
    } catch (error) {}
  };

  const addTransaction = async (narration, amount) => {
    try {
      setAdding(true);
      await firestore
        .collection("transactions")
        .add({ amount, narration, _id: uuid() });
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
      return unsubscrib();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    return unsubscrib();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        deleteTransaction,
        addTransaction,
        loading,
        adding,
        deleting,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
