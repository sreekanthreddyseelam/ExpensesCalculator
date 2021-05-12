import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },

  { id: "e5", title: "Iphone", amount: 850.78, date: new Date(2019, 12, 19) },
  { id: "e6", title: "Mointor", amount: 250.49, date: new Date(2019, 2, 12) },
  { id: "e7", title: "Watch", amount: 150.49, date: new Date(2019, 5, 13) },
  { id: "e8", title: "Chair", amount: 30.49, date: new Date(2019, 6, 20) },
  { id: "e9", title: "keyboard", amount: 40.49, date: new Date(2020, 4, 28) },
  {
    id: "e10",
    title: "Chocolates",
    amount: 20.49,
    date: new Date(2020, 9, 10)
  },
  { id: "e11", title: "Bike", amount: 500.49, date: new Date(2020, 11, 22) },
  { id: "e12", title: "Laptop", amount: 1200.49, date: new Date(2021, 8, 20) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
