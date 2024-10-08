import { useState } from "react";
import Button from "./components/Button/Button";
import {produce} from 'immer'

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);
  const handleClick = () => {
    // update
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // using immer function
    setBugs(produce(draft => {
      const bug = draft.find(bug=> bug.id === 1);
      if(bug) bug.fixed = true;
      
      }))
   

  };

  return (
    <div>
    {bugs.map(bug=> <p key={bug.id}> {bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
};

export default App;
