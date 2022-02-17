import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const onSubmit = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={onShowForm}>Add New Expenses</button>}
      {showForm && <ExpenseForm onSubmit={onSubmit} onShowForm={onShowForm} />}
    </div>
  );
};

export default NewExpense;
