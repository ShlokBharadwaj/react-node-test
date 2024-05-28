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
            window.dispatchEvent(new Event('login'));
            toast('Login successful');
            navigate('/protected');
        } catch (err) {
            toast.error(err.response.data.msg || 'Invalid Credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-400 to-teal-600">
            <div className="bg-dark bg-opacity-90 p-10 rounded-lg shadow-lg w-96">
                <h2 className="text-center text-2xl text-white mb-6">Sign In</h2>
                <div className="flex justify-center mb-6">
                    <img src="/path/to/your/avatar-icon.png" alt="Avatar" className="w-16 h-16 rounded-full border-2 border-white" />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                        <div className="relative">
                            <Form.Label className="text-gray-400">Username</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full py-2 px-3 rounded bg-dark text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <div className="relative">
                            <Form.Label className="text-gray-400">Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full py-2 px-3 rounded bg-dark text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="flex items-center justify-between mb-4">
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            className="text-gray-400"
                        />
                        <a href="#" className="text-teal-400 hover:underline text-sm">Forgot your password?</a>
                    </Form.Group>
                    <Button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </Button>
                </Form>
                <p className="mt-4 text-center text-sm text-gray-400">
                    Don't have an account?
                    <a className="text-teal-400 hover:text-teal-600 underline cursor-pointer" onClick={() => navigate('/register')}>
                        &nbsp;Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
