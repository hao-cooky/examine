// hooks/useCarData.ts
import {useState, useEffect} from 'react';
import UserService, {type User} from "../core/services/UserService.ts";


export function useUsersData() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setLoading(true);
                const data = await UserService.getUsers();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load users');
                setLoading(false);
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return {users, error, loading};
}