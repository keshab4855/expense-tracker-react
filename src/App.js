import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "Toilet Rolls",
      amount: 299,
      date: new Date(2022, 4, 29),
    },
    {
      title: "Home Expense",
      amount: 399,
      date: new Date(2022, 4, 29),
    },
    {
      title: "Clothing",
      amount: 299,
      date: new Date(2022, 4, 29),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
