import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
  
    const fetchUsers = async () => {

        try{
          const res = await axios.get<Users[]>(
            "https://jsonplaceholder.typicode.com/xusers"
          );
          setUsers(res.data);
          //.then((res) => setUsers(res.data))
          //.catch((err) => setError(err.message));
          }
          catch(err){
            setError((err as AxiosError).message);

          }
      
    };
    fetchUsers();
  }, [users]);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
