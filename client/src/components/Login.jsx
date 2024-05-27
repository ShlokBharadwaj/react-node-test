import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', res.data.token);
            toast('Login successful');
            navigate('/protected');
        } catch (err) {
            toast.error(err.response.data.msg || 'Invalid Credentials');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-full bg-gray-200">
            <Form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
                <h2 className="text-center text-2xl mb-4">Login</h2>
                <Form.Group className="mb-4">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Email:</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </Form.Group>
                <Form.Group className="mb-6">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Password:</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </Form.Group>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </Button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a className="text-blue-500 hover:text-blue-700 underline cursor-pointer" onClick={() => navigate('/register')}>
                        &nbsp;Register
                    </a>
                </p>
            </Form>
        </div>
    );
};

export default Login;