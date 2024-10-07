import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Coke",
    price: 12,
  });
  const handleClick = () => {
    setDrink({...drink, price: 15});
  };
  return (
    <div>
      <h1>{drink.price}</h1>
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
};

export default App;
