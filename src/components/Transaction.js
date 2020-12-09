import React, { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionsContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.narration}
      <span>
        {sign}N {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};
