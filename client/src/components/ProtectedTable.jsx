import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Table, Button } from 'react-bootstrap';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const ProtectedTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            const config = { headers: { 'x-auth-token': token } };
            try {
                const res = await axios.get('http://localhost:5000/api/users', config);
                setUsers(res.data.map(user => ({ ...user, showPassword: false })));
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    const togglePassword = (index) => {
        setUsers(users.map((user, i) => i === index ? { ...user, showPassword: !user.showPassword } : user));
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date of Birth
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Password
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(user.dateOfBirth).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.showPassword ? user.password : '••••••••'}
                                <button onClick={() => togglePassword(index)} className="ml-2">
                                    {user.showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProtectedTable;