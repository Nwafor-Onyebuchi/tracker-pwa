import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { narration: "Books", id: uuid(), amount: 200000 },
    { narration: "Camera", id: uuid(), amount: -45600 },
    { narration: "T-shirt", id: uuid(), amount: -15000 },
    { narration: "Elelctrity bills", id: uuid(), amount: 2000 },
  ]);

  const addTransaction = (narration, amount) => {
    setTransactions([...transactions, { narration, amount }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
