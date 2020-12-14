import React, { Fragment, useContext } from "react";
// import {GlobalContext} from '../context/GlobalSta
import { TransactionsContext } from "../context/TransactionsContext";

export const Balance = () => {
  const { transactions } = useContext(TransactionsContext);
  // console.log(transactions);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <Fragment>
      <h4 style={{ marginTop: "24px" }}>YOUR BALANCE</h4>
      <h1 id="balance">{total}</h1>
    </Fragment>
  );
};
