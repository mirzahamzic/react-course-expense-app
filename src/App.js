import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "1", title: "Jabuke", amount: 23, date: new Date(2021, 12, 25) },
    { id: "2", title: "Kruske", amount: 50, date: new Date(2021, 8, 15) },
    { id: "3", title: "Narandze", amount: 82, date: new Date(2021, 10, 14) },
  ];

  const onSubmit = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={onSubmit} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
