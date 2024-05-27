import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: new Date(),
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
        <div className="flex items-center justify-center">
            <Form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
                <h2 className="text-center text-2xl mb-4">Register</h2>
                <Form.Group className="mb-4">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Name:</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</Form.Label>
                    <Form.Control type="date" name="dateOfBirth" onChange={handleChange} required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Email:</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </Form.Group>
                <Form.Group className="mb-6">
                    <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Password:</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </Form.Group>
                <div className="flex items-center justify-center">
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Register
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?
                        <a className="text-blue-500 hover:text-blue-700 underline cursor-pointer" onClick={() => navigate('/login')}>
                            &nbsp;Login here
                        </a>
                    </p>
                </div>
            </Form>
        </div>
    );
};

export default Register;