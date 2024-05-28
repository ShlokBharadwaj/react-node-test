import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleLogout}
        className="max-w-40 bg-teal-500 hover:bg-teal-700 text-indigo-950 font-extralight py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;