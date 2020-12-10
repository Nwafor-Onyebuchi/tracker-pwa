import React, { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { Transaction } from "./Transaction";

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);
  // console.log(transactions.);
  return (
    <div>
      {transactions.length > 0 && <h3>History</h3>}
      <ul id="list" className="list">
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
