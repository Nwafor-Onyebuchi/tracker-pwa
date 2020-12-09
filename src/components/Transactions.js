import React, { Fragment, useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { Transaction } from "./Transaction";

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      {transactions.lenght > 0 && <h3>History</h3>}
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
