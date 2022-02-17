import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2021");

  const filterChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = items.filter((item) => {
    // console.log(new Date(item.date).getFullYear());
    return new Date(item.date).getFullYear().toString() === year;
  });

  // console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChange} selected={year} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
