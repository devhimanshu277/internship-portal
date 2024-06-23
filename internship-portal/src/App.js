import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import InternshipPage from './pages/InternshipPage';
import AuthProvider from './contexts/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/internships" element={<InternshipPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
