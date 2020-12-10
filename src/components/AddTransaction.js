import React, { Fragment, useState, useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { v1 as uuid } from "uuid";
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
import "react-activity/dist/react-activity.css";

export const AddTransaction = () => {
  const { addTransaction, adding, deleting } = useContext(TransactionsContext);

  const [state, setstate] = useState({
    transaction: "",
    amount: "",
    id: uuid(),
  });
  const handleTransactionInput = (e) => {
    setstate({ ...state, transaction: e.target.value });
  };

  const handleAmountInput = (e) => {
    setstate({ ...state, amount: parseFloat(e.target.value) });
  };

  const show = (e) => {
    e.preventDefault();
    addTransaction(state.transaction, state.amount);
    setstate({ transaction: "", amount: "", uuid: "" });
  };

  return (
    <Fragment>
      <h3>Add transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="Transaction">Transaction</label>
          <input
            type="text"
            value={state.transaction}
            placeholder="Enter short description for transaction"
            onChange={handleTransactionInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <small></small>
          </label>
          <input
            type="number"
            value={state.amount}
            placeholder="500 (income) or -500 (expense)"
            onChange={handleAmountInput}
          />
        </div>
        <button className="btn" onClick={show} disabled={adding ? true : false}>
          {"Add Transaction"}
        </button>
      </form>
    </Fragment>
  );
};
