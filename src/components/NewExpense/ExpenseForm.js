import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSubmit, onShowForm }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (e) => {
    // setUserInput({ ...userInput, title: e.target.value });
    // setUserInput((prevState) => ({ ...prevState, title: e.target.value }));
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    // setUserInput((prevState) => ({ ...prevState, amount: e.target.value }));
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    // setUserInput((prevState) => ({ ...prevState, date: e.target.value }));
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    onSubmit(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
    onShowForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            name="title"
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onShowForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
