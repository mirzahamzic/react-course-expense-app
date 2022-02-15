import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: "1", title: "Jabuke", amount: 23, date: new Date(2021, 12, 25) },
    { id: "1", title: "Kruske", amount: 50, date: new Date(2021, 8, 15) },
    { id: "1", title: "Narandze", amount: 82, date: new Date(2021, 10, 14) },
  ];
  return (
    <div>
      <h2>Expenses</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
