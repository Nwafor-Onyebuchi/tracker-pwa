import React, { Fragment, useState, useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { v1 as uuid } from "uuid";

export const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionsContext);
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
  };

  return (
    <Fragment>
      <h3>Add transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="Transaction">Transaction</label>
          <input
            type="text"
            placeholder="Tap to add a transaction..."
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
            placeholder="Enter +value for income and -value for expense"
            onChange={handleAmountInput}
          />
        </div>
        <button className="btn" onClick={show}>
          Add Transaction
        </button>
      </form>
    </Fragment>
  );
};
