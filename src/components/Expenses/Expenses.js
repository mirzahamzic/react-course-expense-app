import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2021");

  const filterChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = items.filter((item) => {
    console.log(new Date(item.date).getFullYear());
    return new Date(item.date).getFullYear().toString() === year;
  });

  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChange} selected={year} />
        {filteredExpenses.map((item) => (
          <ExpenseItem key={item.id} item={item} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
