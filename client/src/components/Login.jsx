import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';

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
        <div className="min-h-2.5 flex items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950 rounded-lg">
            <div className="bg-dark bg-opacity-90 p-10 rounded-lg shadow-lg w-96 mx-auto relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-20 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/waves.png')" }}></div>
                <div className="relative z-10">
                    <div className="mb-6 bg-teal-500 w-1/2 mx-auto">
                        <h2 className="text-center text-2xl text-indigo-950 font-extralight mb-6">Sign In</h2>
                    </div>
                    <div className="flex justify-center mb-6">
                        <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="Avatar" className="w-16 h-16 rounded-full border-2 border-white" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-400">Username</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <UserIcon className="h-5 w-5" />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="username"
                                    className="block w-full pl-10 py-2 px-3 rounded-lg bg-slate-600 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <LockClosedIcon className="h-5 w-5" />
                                </span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="password"
                                    className="block w-full pl-10 py-2 px-3 rounded-lg bg-slate-600 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-teal-400">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-teal-400 hover:underline text-sm">Forgot your password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-700 text-indigo-950 font-extralight py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-400">
                        Don't have an account?
                        <a className="text-teal-400 hover:text-teal-600 underline cursor-pointer" onClick={() => navigate('/register')}>
                            &nbsp;Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
