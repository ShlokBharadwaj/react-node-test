import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', res.data.token);
            toast.success('Login successful');
            navigate('/protected');
        } catch (err) {
            toast.error('Invalid Credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Login</button>
        </form>
    );
};

export default Login;
