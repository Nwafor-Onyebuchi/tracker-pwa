import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Cashflow } from "./components/CashFlow";
import { Header } from "./components/Header";
import { Transactions } from "./components/Transactions";
import TransactionsContextProvider from "./context/TransactionsContext";

function App() {
  return (
    <div className="App">
      <TransactionsContextProvider>
        <Header name="Expense Tracker" />
        <Balance />
        <Cashflow />
        <Transactions />
        <AddTransaction />
      </TransactionsContextProvider>
    </div>
  );
}

export default App;
