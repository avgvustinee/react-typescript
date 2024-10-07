import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [isVisible, setAlertVisibility] = useState(false);
  const handleClick = ()=>{
    setAlertVisibility(true);
    console.log(isVisible);
  }
  return (
    <div>
    <Button onClick={handleClick}>
      Show
    </Button>
    </div>
  );
};

export default App;
