import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            toast.error('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} className="border p-2" />
            </div>
            <div>
                <label>Date of Birth:</label>
                <DatePicker selected={formData.dateOfBirth} onChange={date => setFormData({ ...formData, dateOfBirth: date })} className="border p-2" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} className="border p-2" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} className="border p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Register</button>
        </form>
    );
};

export default Register;
