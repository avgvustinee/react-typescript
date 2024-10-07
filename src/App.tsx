import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "Augustine",
    address: {
      city: "Polokwane",
      country: "South Africa",
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, country: "England" },
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
};

export default App;
