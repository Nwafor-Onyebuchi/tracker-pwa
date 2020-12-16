import React, { Fragment, useState, useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { v1 as uuid } from "uuid";
import { Form, Button } from "react-bootstrap";

import "react-activity/dist/react-activity.css";
import { UserContext } from "../context/UserContext";

export const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionsContext);
  const { user } = useContext(UserContext);

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
    addTransaction(state.transaction, state.amount, user.uid);
    setstate({ transaction: "", amount: "", uuid: "" });
  };

  return (
    <Fragment>
      <h3>Add transaction</h3>
      <Form onSubmit={show}>
        <Form.Group>
          <Form.Label>Transaction</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add transaction"
            onChange={handleTransactionInput}
            value={state.transaction}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="500 (income) or -500 (expense)"
            onChange={handleAmountInput}
            value={state.amount}
          />
        </Form.Group>

        <Button variant="primary" className="btn-block mb-5" type="submit">
          Add Transaction
        </Button>
      </Form>
    </Fragment>
  );
};
