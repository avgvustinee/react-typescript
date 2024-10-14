import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {

  const [expenses, setExpenses] = useState( [
    { id: 1, description: 'Rent', amount: 1000, category: "Utilities" },
    { id: 2, description: 'Groceries', amount: 500, category: "Utilities" },
    { id: 3, description: 'Gas', amount: 200, category: "Utilities" },
    { id: 4, description: 'Dining out', amount: 100, category: "Utilities" },
  ]);


  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e=> e.id !== id))} />
    </div>
  );
};

export default App;
