
import React, { useEffect, useState } from 'react';
import Usercard from '../usercard'; // Ensure this path matches your file structure
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {users.map((user) => (
                    <Usercard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        onClick={() => navigate(`/users/${user.id}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Users;
