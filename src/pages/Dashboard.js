import React from "react";
import TransactionsContextProvider from "../context/TransactionsContext";
import { AddTransaction } from "../components/AddTransaction";
import { Balance } from "../components/Balance";
import { Cashflow } from "../components/CashFlow";
import { Transactions } from "../components/Transactions";
import { Header } from "../components/Header";

const Dashbord = () => {
  return (
    <TransactionsContextProvider>
      <Header name={"TrackIt"} />
      <Balance />
      <Cashflow />
      <Transactions />
      <AddTransaction />
    </TransactionsContextProvider>
  );
};

export default Dashbord;
