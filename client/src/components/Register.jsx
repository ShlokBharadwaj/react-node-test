import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/register', formData);
            localStorage.setItem('token', res.data.token);
            toast.success('Registration successful');
            navigate('/protected');
        } catch (err) {
            toast.error(err.response.data.msg || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-400 to-teal-600">
            <div className="bg-dark bg-opacity-90 p-10 rounded-lg shadow-lg w-96">
                <h2 className="text-center text-2xl text-white mb-6">Register</h2>
                <div className="flex justify-center mb-6">
                    <img src="/path/to/your/avatar-icon.png" alt="Avatar" className="w-16 h-16 rounded-full border-2 border-white" />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                        <div className="relative">
                            <Form.Label className="text-gray-400">Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={handleChange}
                                required
                                className="block w-full py-2 px-3 rounded bg-dark text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <div className="relative">
                            <Form.Label className="text-gray-400">Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dateOfBirth"
                                onChange={handleChange}
                                required
                                className="block w-full py-2 px-3 rounded bg-dark text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <div className="relative">
                            <Form.Label className="text-gray-400">Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleChange}
                                required
                                className="block w-full py-2 px-3 rounded bg-dark text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-6">
                        <div className="relative">
                            <Form.Label className="text-gray-400">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={handleChange}
                                required
                                className="block w-full py-2 px-3 rounded bg-dark text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </Form.Group>
                    <Button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </Button>
                </Form>
                <p className="mt-4 text-center text-sm text-gray-400">
                    Already have an account?
                    <a className="text-teal-400 hover:text-teal-600 underline cursor-pointer" onClick={() => navigate('/login')}>
                        &nbsp;Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
