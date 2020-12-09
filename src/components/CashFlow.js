import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
import { TransactionsContext } from "../context/TransactionsContext";

export const Cashflow = () => {
  const { transactions } = useContext(TransactionsContext);

  const amount = transactions.map((transaction) => transaction.amount);
  //const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = +amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = +amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{+income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{+expense}</p>
      </div>
    </div>
  );
};
