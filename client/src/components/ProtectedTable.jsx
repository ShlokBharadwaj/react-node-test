import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const ProtectedTable = () => {
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            const config = { headers: { 'x-auth-token': token } };
            try {
                const res = await axios.get('http://localhost:5000/api/users', config);
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <Table striped bordered hover className="shadow">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{new Date(user.dateOfBirth).toLocaleDateString()}</td>
                            <td>{user.email}</td>
                            <td>
                                {console.log(user.password)}
                                {showPassword ? user.password : '••••••••'}
                                <Button variant="link" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProtectedTable;