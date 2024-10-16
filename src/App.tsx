import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, [users]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
