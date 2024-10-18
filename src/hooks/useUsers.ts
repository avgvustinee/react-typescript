import { useEffect, useState } from "react";
import { CanceledError } from "../services/apiClient";
import userServices, { User } from "../services/userServices";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = userServices.getAll<User>();

        request
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        // cleanup function
        return () => cancel();
    }, []);

    return { users, error, isLoading , setUsers, setError}

}

export default useUsers;