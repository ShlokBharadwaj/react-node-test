import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedPage from './pages/ProtectedPage';
import Logout from "./components/Logout";
import { ToastContainer } from 'react-toastify';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('token') !== null);
  }, []);


  useEffect(() => {
    const loginListener = () => setIsAuthenticated(true);

    window.addEventListener('login', loginListener);

    return () => {
      window.removeEventListener('login', loginListener);
    };
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <ToastContainer />
      {/* {isAuthenticated && <Logout />} */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/" element={isAuthenticated() ? <ProtectedPage /> : <Navigate to="/login" />} /> */}
        <Route path="/protected" element={isAuthenticated ? <ProtectedPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
