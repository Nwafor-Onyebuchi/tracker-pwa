import React, { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
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

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, loading } = useContext(TransactionsContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.narration}
      <span>
        {sign}N {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        X
      </button>
    </li>
  );
};
