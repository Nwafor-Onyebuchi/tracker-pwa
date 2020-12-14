import React from "react";
import TransactionsContextProvider from "../context/TransactionsContext";

import { AddTransaction } from "../components/AddTransaction";
import { Balance } from "../components/Balance";
import { Cashflow } from "../components/CashFlow";
import { Transactions } from "../components/Transactions";
import { Header } from "../components/Header";
import UserContextProvider from "../context/UserContext";

const Dashbord = () => {
  return (
    <TransactionsContextProvider>
      <UserContextProvider>
        <Header name={"TrackIt"} />
        <Balance />
        <Cashflow />
        <Transactions />
        <AddTransaction />
      </UserContextProvider>
    </TransactionsContextProvider>
  );
};

export default Dashbord;
