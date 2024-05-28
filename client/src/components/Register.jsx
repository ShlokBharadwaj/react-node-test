import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';

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
        <div className="min-h-2.5 flex items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950 rounded-lg">
            <div className="bg-dark bg-opacity-90 p-10 rounded-lg shadow-lg w-96 mx-auto relative overflow-hidden">
                <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-20 bg-cover bg-center">
                        <div className="absolute inset-x-0 bottom-0">
                            <svg viewBox="0 0 1440 320" className="opacity-55">
                                <path fill="#3a506b " fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                            <svg style={{ position: 'absolute', top: '25px', opacity: '0.3' }} viewBox="0 0 1440 320">
                                <path fill="#3a506b " fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,112C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>

                            <svg style={{ position: 'absolute', top: '50px', opacity: '0.5' }} viewBox="0 0 1440 320">
                                <path fill="#3a506b " fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,160C672,160,768,192,864,224C960,256,1056,288,1152,288C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>

                            <svg style={{ position: 'absolute', top: '100px', opacity: '0.7' }} viewBox="0 0 1440 320">
                                <path fill="#3a506b " fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,224C672,224,768,256,864,256C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="mb-6 bg-teal-500 w-1/2 mx-auto">
                        <h2 className="text-center text-2xl text-indigo-950 font-extralight mb-6">Sign Up</h2>
                    </div>
                    <div className="flex justify-center mb-6">
                        <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="Avatar" className="w-16 h-16 rounded-full border-2 border-white" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <UserIcon className="h-5 w-5" />
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full Name"
                                    className="block w-full pl-10 py-2 px-3 rounded-lg bg-slate-600 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <UserIcon className="h-5 w-5" />
                                </span>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    placeholder="Date of Birth"
                                    className="block w-full pl-10 py-2 px-3 rounded-lg bg-slate-600 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <UserIcon className="h-5 w-5" />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email"
                                    className="block w-full pl-10 py-2 px-3 rounded-lg bg-slate-600 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <LockClosedIcon className="h-5 w-5" />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Password"
                                    className="block w-full pl-10 py-2 px-3 rounded-lg bg-slate-600 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-400">
                        Already have an account?
                        <a className="text-teal-400 hover:text-teal-600 underline cursor-pointer" onClick={() => navigate('/login')}>
                            &nbsp;Login here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
