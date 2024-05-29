// src/App.tsx
import React from 'react';
import LoginPage from './components/LoginPage';
import FinancePage from './components/FinancePage';
import PermitsPage from './components/PermitsPage';
import FinesPage from './components/FinesPage';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';

import './styles/ErrorPage.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/finance" element={<><NavBar /><FinancePage /></>} />
                <Route path="/permits" element={<><NavBar /><PermitsPage /></>} />
                <Route path="/fines" element={<><NavBar /><FinesPage /></>} />
                <Route path="/dashboard" element={<><NavBar /><ErrorPage /></>} />
                <Route path="*" element={<div className="error-page">Page Not Found</div>} />
            </Routes>
        </Router>
    );
};

export default App;
