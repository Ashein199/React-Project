import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: "Car Insurance", price: 290.67, date: new Date(2020, 3, 8) },
  { id: 2, title: "Snack", price: 4.12, date: new Date(2019, 1, 8) },
  { id: 3, title: "Toilet Paper", price: 120.2, date: new Date(2022, 7, 22) },
  { id: 4, title: "Water Bootle", price: 17.8, date: new Date(2020, 4, 13) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("Expense:", expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("Expense List:", expenses);

    // setExpenses([expense, ...expenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
