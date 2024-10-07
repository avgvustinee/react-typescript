import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);
    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));
    // Update
    setTags(tags.map((tag) => tag === "happy" ? "happiness":tag));


  };
  return (
    <div>
      <Button onClick={handleClick}>Show</Button>
    </div>
  );
};

export default App;
