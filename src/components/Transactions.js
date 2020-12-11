import React, { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { Transaction } from "./Transaction";
import {
  Dots,
  Levels,
  Sentry,
  Squares,
  Spinner,
  Digital,
  Bounce,
  Windmill,
} from "react-activity";

export const Transactions = () => {
  const { transactions, loading } = useContext(TransactionsContext);
  console.log(loading);
  return (
    <div>
      {transactions.length > 0 && <h3>History</h3>}
      {!loading && (
        <ul id="list" className="list">
          {transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
        </ul>
      )}
      {loading && (
        <div id="activity">
          <Sentry color="#0F3B8C" size={32} />
        </div>
      )}
    </div>
  );
};
