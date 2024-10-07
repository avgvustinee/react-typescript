import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);
  const handleClick = () => {
    // update
    setBugs(bugs.map(bug=> bug.id === 1 ? {...bug, fixed:true} : bug));
  };


  return (
    <div>
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
};

export default App;
