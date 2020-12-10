import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import { firestore } from "../firebase/config";

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (narration, amount) => {
    try {
      await firestore
        .collection("transactions")
        .add({ amount, narration, _id: uuid() });
    } catch (error) {
      console.log(error);
    }

    // setTransactions([...transactions, { narration, amount }]);
  };

  const deleteTransaction = async (id) => {
    try {
      const dataToRemove = await firestore
        .collection("transactions")
        .where("_id", "==", `${id}`);

      dataToRemove.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = [];
        await firestore.collection("transactions").onSnapshot((snapshot) => {
          let changes = snapshot.docChanges();
          changes.forEach((change) => data.push(change.doc.data()));
          setTransactions(data);
        });
      } catch (error) {}
    };
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
